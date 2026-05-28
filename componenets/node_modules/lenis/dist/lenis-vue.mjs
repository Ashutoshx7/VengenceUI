import Lenis from "lenis";
import { computed, defineComponent, h, inject, nextTick, onWatcherCleanup, provide, reactive, ref, shallowRef, watch } from "vue";
//#region packages/vue/src/store.ts
const globalLenis = shallowRef();
const globalAddCallback = shallowRef();
const globalRemoveCallback = shallowRef();
//#endregion
//#region packages/vue/src/provider.ts
const LenisSymbol = Symbol("LenisContext");
const AddCallbackSymbol = Symbol("AddCallback");
const RemoveCallbackSymbol = Symbol("RemoveCallback");
const VueLenis = defineComponent({
	name: "VueLenis",
	props: {
		root: {
			type: Boolean,
			default: false
		},
		autoRaf: {
			type: Boolean,
			default: true
		},
		options: {
			type: Object,
			default: () => ({})
		},
		props: {
			type: Object,
			default: () => ({})
		}
	},
	setup(props, { slots, expose }) {
		const lenisRef = shallowRef();
		const wrapper = ref();
		const content = ref();
		expose({
			lenis: lenisRef,
			wrapper,
			content
		});
		watch([
			() => props.options,
			wrapper,
			content
		], () => {
			if (!(typeof window !== "undefined")) return;
			if (!(props.root || wrapper.value && content.value)) return;
			lenisRef.value = new Lenis({
				...props.options,
				...!props.root ? {
					wrapper: wrapper.value,
					content: content.value
				} : {},
				autoRaf: props.options?.autoRaf ?? props.autoRaf
			});
			onWatcherCleanup(() => {
				lenisRef.value?.destroy();
				lenisRef.value = void 0;
			});
		}, {
			deep: true,
			immediate: true
		});
		const callbacks = reactive([]);
		function addCallback(callback, priority) {
			callbacks.push({
				callback,
				priority
			});
			callbacks.sort((a, b) => a.priority - b.priority);
		}
		function removeCallback(callback) {
			callbacks.splice(callbacks.findIndex((cb) => cb.callback === callback), 1);
		}
		const onScroll = (data) => {
			for (const { callback } of callbacks) callback(data);
		};
		watch([lenisRef, () => props.root], ([lenis, root]) => {
			lenis?.on("scroll", onScroll);
			if (root) {
				globalLenis.value = lenis;
				globalAddCallback.value = addCallback;
				globalRemoveCallback.value = removeCallback;
				onWatcherCleanup(() => {
					globalLenis.value = void 0;
					globalAddCallback.value = void 0;
					globalRemoveCallback.value = void 0;
				});
			}
		}, { immediate: true });
		if (!props.root) {
			provide(LenisSymbol, lenisRef);
			provide(AddCallbackSymbol, addCallback);
			provide(RemoveCallbackSymbol, removeCallback);
		}
		return () => {
			if (props.root) return slots.default?.();
			return h("div", {
				ref: wrapper,
				...props?.props
			}, [h("div", { ref: content }, slots.default?.())]);
		};
	}
});
const vueLenisPlugin = (app) => {
	app.component("vue-lenis", VueLenis);
	app.provide(LenisSymbol, shallowRef(void 0));
	app.provide(AddCallbackSymbol, void 0);
	app.provide(RemoveCallbackSymbol, void 0);
};
//#endregion
//#region packages/vue/src/use-lenis.ts
function useLenis(callback, priority = 0) {
	const lenisInjection = inject(LenisSymbol);
	const addCallbackInjection = inject(AddCallbackSymbol);
	const removeCallbackInjection = inject(RemoveCallbackSymbol);
	const addCallback = computed(() => addCallbackInjection ? addCallbackInjection : globalAddCallback.value);
	const removeCallback = computed(() => removeCallbackInjection ? removeCallbackInjection : globalRemoveCallback.value);
	const lenis = computed(() => lenisInjection?.value ? lenisInjection.value : globalLenis.value);
	if (typeof window !== "undefined") nextTick(() => {
		nextTick(() => {
			if (!lenis.value && import.meta.env.DEV) console.warn("No lenis instance found, either mount a root lenis instance or wrap your component in a lenis provider");
		});
	});
	watch([
		lenis,
		addCallback,
		removeCallback
	], ([lenis, addCallback, removeCallback]) => {
		if (!(lenis && addCallback && removeCallback && callback)) return;
		addCallback?.(callback, priority);
		callback?.(lenis);
		onWatcherCleanup(() => {
			removeCallback?.(callback);
		});
	}, { immediate: true });
	return lenis;
}
//#endregion
export { VueLenis as Lenis, VueLenis, vueLenisPlugin as default, useLenis };

//# sourceMappingURL=lenis-vue.mjs.map