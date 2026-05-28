"use client";
import Lenis from "lenis";
import { createContext, forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region packages/react/src/store.ts
var Store = class {
	listeners = [];
	constructor(state) {
		this.state = state;
	}
	set(state) {
		this.state = state;
		for (const listener of this.listeners) listener(this.state);
	}
	subscribe(listener) {
		this.listeners = [...this.listeners, listener];
		return () => {
			this.listeners = this.listeners.filter((l) => l !== listener);
		};
	}
	get() {
		return this.state;
	}
};
function useStore(store) {
	const [state, setState] = useState(store.get());
	useEffect(() => {
		return store.subscribe((state) => setState(state));
	}, [store]);
	return state;
}
//#endregion
//#region packages/react/src/provider.tsx
const LenisContext = createContext(null);
/**
* The root store for the lenis context
*
* This store serves as a fallback for the context if it is not available
* and allows us to use the global lenis instance above a provider
*/
const rootLenisContextStore = new Store(null);
/**
* React component to setup a Lenis instance
*/
const ReactLenis = forwardRef(({ children, root = false, options = {}, autoRaf = true, className = "", ...props }, ref) => {
	const wrapperRef = useRef(null);
	const contentRef = useRef(null);
	const [lenis, setLenis] = useState(void 0);
	useImperativeHandle(ref, () => ({
		wrapper: wrapperRef.current,
		content: contentRef.current,
		lenis
	}), [lenis]);
	useEffect(() => {
		const lenis = new Lenis({
			...options,
			...wrapperRef.current && contentRef.current && {
				wrapper: wrapperRef.current,
				content: contentRef.current
			},
			autoRaf: options?.autoRaf ?? autoRaf
		});
		setLenis(lenis);
		return () => {
			lenis.destroy();
			setLenis(void 0);
		};
	}, [autoRaf, JSON.stringify({
		...options,
		wrapper: null,
		content: null
	})]);
	const callbacksRefs = useRef([]);
	const addCallback = useCallback((callback, priority) => {
		callbacksRefs.current.push({
			callback,
			priority
		});
		callbacksRefs.current.sort((a, b) => a.priority - b.priority);
	}, []);
	const removeCallback = useCallback((callback) => {
		callbacksRefs.current = callbacksRefs.current.filter((cb) => cb.callback !== callback);
	}, []);
	useEffect(() => {
		if (root && lenis) {
			rootLenisContextStore.set({
				lenis,
				addCallback,
				removeCallback
			});
			return () => rootLenisContextStore.set(null);
		}
	}, [
		root,
		lenis,
		addCallback,
		removeCallback
	]);
	useEffect(() => {
		if (!lenis) return;
		const onScroll = (data) => {
			for (const { callback } of callbacksRefs.current) callback(data);
		};
		lenis.on("scroll", onScroll);
		return () => {
			lenis.off("scroll", onScroll);
		};
	}, [lenis]);
	if (!children) return null;
	return /* @__PURE__ */ jsx(LenisContext.Provider, {
		value: {
			lenis,
			addCallback,
			removeCallback
		},
		children: root && root !== "asChild" ? children : /* @__PURE__ */ jsx("div", {
			ref: wrapperRef,
			className: `${className} ${lenis?.className ?? ""}`.trim(),
			...props,
			children: /* @__PURE__ */ jsx("div", {
				ref: contentRef,
				children
			})
		})
	});
});
//#endregion
//#region packages/react/src/use-lenis.ts
const fallbackContext = {};
/**
* Hook to access the Lenis instance and its methods
*
* @example <caption>Scroll callback</caption>
*          useLenis((lenis) => {
*            if (lenis.isScrolling) {
*              console.log('Scrolling...')
*            }
*
*            if (lenis.progress === 1) {
*              console.log('At the end!')
*            }
*          })
*
* @example <caption>Scroll callback with dependencies</caption>
*          useLenis((lenis) => {
*            if (lenis.isScrolling) {
*              console.log('Scrolling...', someDependency)
*            }
*          }, [someDependency])
* @example <caption>Scroll callback with priority</caption>
*          useLenis((lenis) => {
*            if (lenis.isScrolling) {
*              console.log('Scrolling...')
*            }
*          }, [], 1)
* @example <caption>Instance access</caption>
*          const lenis = useLenis()
*
*          handleClick() {
*            lenis.scrollTo(100, {
*              lerp: 0.1,
*              duration: 1,
*              easing: (t) => t,
*              onComplete: () => {
*                console.log('Complete!')
*              }
*            })
*          }
*/
function useLenis(callback, deps = [], priority = 0) {
	const localContext = useContext(LenisContext);
	const rootContext = useStore(rootLenisContextStore);
	const { lenis, addCallback, removeCallback } = localContext ?? rootContext ?? fallbackContext;
	useEffect(() => {
		if (!(callback && addCallback && removeCallback && lenis)) return;
		addCallback(callback, priority);
		callback(lenis);
		return () => {
			removeCallback(callback);
		};
	}, [
		lenis,
		addCallback,
		removeCallback,
		priority,
		...deps,
		callback
	]);
	return lenis;
}
//#endregion
export { ReactLenis as Lenis, ReactLenis, ReactLenis as default, LenisContext, useLenis };

//# sourceMappingURL=lenis-react.mjs.map