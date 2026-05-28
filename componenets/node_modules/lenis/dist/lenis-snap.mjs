//#region packages/snap/src/debounce.ts
function debounce(callback, delay) {
	let timer;
	return function(...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = void 0;
			callback.apply(this, args);
		}, delay);
	};
}
//#endregion
//#region packages/snap/src/element.ts
function removeParentSticky(element) {
	if (getComputedStyle(element).position === "sticky") {
		element.style.setProperty("position", "static");
		element.dataset.sticky = "true";
	}
	if (element.offsetParent) removeParentSticky(element.offsetParent);
}
function addParentSticky(element) {
	if (element?.dataset?.sticky === "true") {
		element.style.removeProperty("position");
		delete element.dataset.sticky;
	}
	if (element.offsetParent) addParentSticky(element.offsetParent);
}
function offsetTop(element, accumulator = 0) {
	const top = accumulator + element.offsetTop;
	if (element.offsetParent) return offsetTop(element.offsetParent, top);
	return top;
}
function offsetLeft(element, accumulator = 0) {
	const left = accumulator + element.offsetLeft;
	if (element.offsetParent) return offsetLeft(element.offsetParent, left);
	return left;
}
function scrollTop(element, accumulator = 0) {
	const top = accumulator + element.scrollTop;
	if (element.offsetParent) return scrollTop(element.offsetParent, top);
	return top + window.scrollY;
}
function scrollLeft(element, accumulator = 0) {
	const left = accumulator + element.scrollLeft;
	if (element.offsetParent) return scrollLeft(element.offsetParent, left);
	return left + window.scrollX;
}
var SnapElement = class {
	element;
	options;
	align;
	rect = {};
	wrapperResizeObserver;
	resizeObserver;
	debouncedWrapperResize;
	constructor(element, { align = ["start"], ignoreSticky = true, ignoreTransform = false } = {}) {
		this.element = element;
		this.options = {
			align,
			ignoreSticky,
			ignoreTransform
		};
		this.align = [align].flat();
		this.debouncedWrapperResize = debounce(this.onWrapperResize, 500);
		this.wrapperResizeObserver = new ResizeObserver(this.debouncedWrapperResize);
		this.wrapperResizeObserver.observe(document.body);
		this.onWrapperResize();
		this.resizeObserver = new ResizeObserver(this.onResize);
		this.resizeObserver.observe(this.element);
		this.setRect({
			width: this.element.offsetWidth,
			height: this.element.offsetHeight
		});
	}
	destroy() {
		this.wrapperResizeObserver.disconnect();
		this.resizeObserver.disconnect();
	}
	setRect({ top, left, width, height, element } = {}) {
		top = top ?? this.rect.top;
		left = left ?? this.rect.left;
		width = width ?? this.rect.width;
		height = height ?? this.rect.height;
		element = element ?? this.rect.element;
		if (top === this.rect.top && left === this.rect.left && width === this.rect.width && height === this.rect.height && element === this.rect.element) return;
		this.rect.top = top;
		this.rect.y = top;
		this.rect.width = width;
		this.rect.height = height;
		this.rect.left = left;
		this.rect.x = left;
		this.rect.bottom = top + height;
		this.rect.right = left + width;
	}
	onWrapperResize = () => {
		let top;
		let left;
		if (this.options.ignoreSticky) removeParentSticky(this.element);
		if (this.options.ignoreTransform) {
			top = offsetTop(this.element);
			left = offsetLeft(this.element);
		} else {
			const rect = this.element.getBoundingClientRect();
			top = rect.top + scrollTop(this.element);
			left = rect.left + scrollLeft(this.element);
		}
		if (this.options.ignoreSticky) addParentSticky(this.element);
		this.setRect({
			top,
			left
		});
	};
	onResize = ([entry]) => {
		if (!entry?.borderBoxSize[0]) return;
		const width = entry.borderBoxSize[0].inlineSize;
		const height = entry.borderBoxSize[0].blockSize;
		this.setRect({
			width,
			height
		});
	};
};
//#endregion
//#region packages/snap/src/uid.ts
let index = 0;
function uid() {
	return index++;
}
//#endregion
//#region packages/snap/src/snap.ts
/**
* Snap class to handle the snap functionality
*
* @example
* const snap = new Snap(lenis, {
*   type: 'mandatory', // 'mandatory', 'proximity' or 'lock'
*   onSnapStart: (snap) => {
*     console.log('onSnapStart', snap)
*   },
*   onSnapComplete: (snap) => {
*     console.log('onSnapComplete', snap)
*   },
* })
*
* snap.add(500) // snap at 500px
*
* const removeSnap = snap.add(500)
*
* if (someCondition) {
*   removeSnap()
* }
*/
var Snap = class {
	options;
	elements = /* @__PURE__ */ new Map();
	snaps = /* @__PURE__ */ new Map();
	viewport = {
		width: window.innerWidth,
		height: window.innerHeight
	};
	isStopped = false;
	onSnapDebounced;
	currentSnapIndex;
	constructor(lenis, { type = "proximity", lerp, easing, duration, distanceThreshold = "50%", debounce: debounceDelay = 500, onSnapStart, onSnapComplete } = {}) {
		this.lenis = lenis;
		if (!window.lenis) window.lenis = {};
		window.lenis.snap = true;
		this.options = {
			type,
			lerp,
			easing,
			duration,
			distanceThreshold,
			debounce: debounceDelay,
			onSnapStart,
			onSnapComplete
		};
		this.onWindowResize();
		window.addEventListener("resize", this.onWindowResize);
		this.onSnapDebounced = debounce(this.onSnap, this.options.debounce);
		this.lenis.on("virtual-scroll", this.onSnapDebounced);
	}
	/**
	* Destroy the snap instance
	*/
	destroy() {
		this.lenis.off("virtual-scroll", this.onSnapDebounced);
		window.removeEventListener("resize", this.onWindowResize);
		this.elements.forEach((element) => {
			element.destroy();
		});
	}
	/**
	* Start the snap after it has been stopped
	*/
	start() {
		this.isStopped = false;
	}
	/**
	* Stop the snap
	*/
	stop() {
		this.isStopped = true;
	}
	/**
	* Add a snap to the snap instance
	*
	* @param value The value to snap to
	* @param userData User data that will be forwarded through the snap event
	* @returns Unsubscribe function
	*/
	add(value) {
		const id = uid();
		this.snaps.set(id, { value });
		return () => this.snaps.delete(id);
	}
	/**
	* Add an element to the snap instance
	*
	* @param element The element to add
	* @param options The options for the element
	* @returns Unsubscribe function
	*/
	addElement(element, options = {}) {
		const id = uid();
		this.elements.set(id, new SnapElement(element, options));
		return () => this.elements.delete(id);
	}
	addElements(elements, options = {}) {
		const map = [...elements].map((element) => this.addElement(element, options));
		return () => {
			map.forEach((remove) => {
				remove();
			});
		};
	}
	onWindowResize = () => {
		this.viewport.width = window.innerWidth;
		this.viewport.height = window.innerHeight;
	};
	computeSnaps = () => {
		const { isHorizontal } = this.lenis;
		let snaps = [...this.snaps.values()];
		this.elements.forEach(({ rect, align }) => {
			let value;
			align.forEach((align) => {
				if (align === "start") value = rect.top;
				else if (align === "center") value = isHorizontal ? rect.left + rect.width / 2 - this.viewport.width / 2 : rect.top + rect.height / 2 - this.viewport.height / 2;
				else if (align === "end") value = isHorizontal ? rect.left + rect.width - this.viewport.width : rect.top + rect.height - this.viewport.height;
				if (typeof value === "number") snaps.push({ value: Math.ceil(value) });
			});
		});
		snaps = snaps.sort((a, b) => Math.abs(a.value) - Math.abs(b.value));
		return snaps;
	};
	previous() {
		this.goTo((this.currentSnapIndex ?? 0) - 1);
	}
	next() {
		this.goTo((this.currentSnapIndex ?? 0) + 1);
	}
	goTo(index) {
		const snaps = this.computeSnaps();
		if (snaps.length === 0) return;
		this.currentSnapIndex = Math.max(0, Math.min(index, snaps.length - 1));
		const currentSnap = snaps[this.currentSnapIndex];
		if (currentSnap === void 0) return;
		this.lenis.scrollTo(currentSnap.value, {
			duration: this.options.duration,
			easing: this.options.easing,
			lerp: this.options.lerp,
			lock: this.options.type === "lock",
			userData: { initiator: "snap" },
			onStart: () => {
				this.options.onSnapStart?.({
					index: this.currentSnapIndex,
					...currentSnap
				});
			},
			onComplete: () => {
				this.options.onSnapComplete?.({
					index: this.currentSnapIndex,
					...currentSnap
				});
			}
		});
	}
	get distanceThreshold() {
		let distanceThreshold = Number.POSITIVE_INFINITY;
		if (this.options.type === "mandatory") return Number.POSITIVE_INFINITY;
		const { isHorizontal } = this.lenis;
		const axis = isHorizontal ? "width" : "height";
		if (typeof this.options.distanceThreshold === "string" && this.options.distanceThreshold.endsWith("%")) distanceThreshold = Number(this.options.distanceThreshold.replace("%", "")) / 100 * this.viewport[axis];
		else if (typeof this.options.distanceThreshold === "number") distanceThreshold = this.options.distanceThreshold;
		else distanceThreshold = this.viewport[axis];
		return distanceThreshold;
	}
	onSnap = (e) => {
		if (this.isStopped) return;
		if (e.event.type === "touchmove") return;
		if (this.options.type === "lock" && this.lenis.userData?.initiator === "snap") return;
		let { scroll, isHorizontal } = this.lenis;
		const delta = isHorizontal ? e.deltaX : e.deltaY;
		scroll = Math.ceil(this.lenis.scroll + delta);
		const snaps = this.computeSnaps();
		if (snaps.length === 0) return;
		let snapIndex;
		const prevSnapIndex = snaps.findLastIndex(({ value }) => value < scroll);
		const nextSnapIndex = snaps.findIndex(({ value }) => value > scroll);
		if (this.options.type === "lock") {
			if (delta > 0) snapIndex = nextSnapIndex;
			else if (delta < 0) snapIndex = prevSnapIndex;
		} else {
			const prevSnap = snaps[prevSnapIndex];
			const distanceToPrevSnap = prevSnap ? Math.abs(scroll - prevSnap.value) : Number.POSITIVE_INFINITY;
			const nextSnap = snaps[nextSnapIndex];
			snapIndex = distanceToPrevSnap < (nextSnap ? Math.abs(scroll - nextSnap.value) : Number.POSITIVE_INFINITY) ? prevSnapIndex : nextSnapIndex;
		}
		if (snapIndex === void 0) return;
		if (snapIndex === -1) return;
		snapIndex = Math.max(0, Math.min(snapIndex, snaps.length - 1));
		const snap = snaps[snapIndex];
		if (Math.abs(scroll - snap.value) <= this.distanceThreshold) this.goTo(snapIndex);
	};
	resize() {
		this.elements.forEach((element) => {
			element.onWrapperResize();
		});
	}
};
//#endregion
export { Snap as default };

//# sourceMappingURL=lenis-snap.mjs.map