import Lenis, { EasingFunction, VirtualScrollData } from "lenis";

//#region packages/snap/src/element.d.ts
type SnapElementOptions = {
  align?: string | string[];
  ignoreSticky?: boolean;
  ignoreTransform?: boolean;
};
type Rect = {
  top: number;
  left: number;
  width: number;
  height: number;
  x: number;
  y: number;
  bottom: number;
  right: number;
  element: HTMLElement;
};
declare class SnapElement {
  element: HTMLElement;
  options: SnapElementOptions;
  align: string[];
  rect: Rect;
  wrapperResizeObserver: ResizeObserver;
  resizeObserver: ResizeObserver;
  debouncedWrapperResize: () => void;
  constructor(element: HTMLElement, {
    align,
    ignoreSticky,
    ignoreTransform
  }?: SnapElementOptions);
  destroy(): void;
  setRect({
    top,
    left,
    width,
    height,
    element
  }?: {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
    element?: HTMLElement;
  }): void;
  onWrapperResize: () => void;
  onResize: ([entry]: ResizeObserverEntry[]) => void;
}
//#endregion
//#region packages/snap/src/types.d.ts
type SnapItem = {
  value: number;
};
type OnSnapCallback = (item: SnapItem & {
  index?: number;
}) => void;
type SnapOptions = {
  /**
   * Snap type
   * @default 'proximity'
   */
  type?: 'mandatory' | 'proximity' | 'lock';
  /**
   * @description Linear interpolation (lerp) intensity (between 0 and 1)
   */
  lerp?: number;
  /**
   * @description The easing function to use for the snap animation
   */
  easing?: EasingFunction;
  /**
   * @description The duration of the snap animation (in s)
   */
  duration?: number;
  /**
   * @default '50%'
   * @description The distance threshold from the snap point to the scroll position. Ignored when `type` is `mandatory`. If a percentage, it is relative to the viewport size. If a number, it is absolute.
   */
  distanceThreshold?: number | `${number}%`;
  /**
   * @default 500
   * @description The debounce delay (in ms) to prevent snapping too often.
   */
  debounce?: number;
  /**
   * @description Called when the snap starts
   */
  onSnapStart?: OnSnapCallback;
  /**
   * @description Called when the snap completes
   */
  onSnapComplete?: OnSnapCallback;
};
//#endregion
//#region packages/snap/src/snap.d.ts
type RequiredPick<T, F extends keyof T> = Omit<T, F> & Required<Pick<T, F>>;
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
declare class Snap {
  private lenis;
  options: RequiredPick<SnapOptions, 'type' | 'debounce'>;
  elements: Map<number, SnapElement>;
  snaps: Map<number, SnapItem>;
  viewport: {
    width: number;
    height: number;
  };
  isStopped: boolean;
  onSnapDebounced: (e: VirtualScrollData) => void;
  currentSnapIndex?: number;
  constructor(lenis: Lenis, {
    type,
    lerp,
    easing,
    duration,
    distanceThreshold,
    // useless when type is "mandatory"
    debounce: debounceDelay,
    onSnapStart,
    onSnapComplete
  }?: SnapOptions);
  /**
   * Destroy the snap instance
   */
  destroy(): void;
  /**
   * Start the snap after it has been stopped
   */
  start(): void;
  /**
   * Stop the snap
   */
  stop(): void;
  /**
   * Add a snap to the snap instance
   *
   * @param value The value to snap to
   * @param userData User data that will be forwarded through the snap event
   * @returns Unsubscribe function
   */
  add(value: number): () => void;
  /**
   * Add an element to the snap instance
   *
   * @param element The element to add
   * @param options The options for the element
   * @returns Unsubscribe function
   */
  addElement(element: HTMLElement, options?: SnapElementOptions): () => void;
  addElements(elements: HTMLElement[], options?: SnapElementOptions): () => void;
  private onWindowResize;
  private computeSnaps;
  previous(): void;
  next(): void;
  goTo(index: number): void;
  get distanceThreshold(): number;
  private onSnap;
  resize(): void;
}
//#endregion
export { OnSnapCallback, SnapItem, SnapOptions, Snap as default };
//# sourceMappingURL=lenis-snap.d.ts.map