"use client";
import Lenis, { LenisOptions, ScrollCallback } from "lenis";
import * as react from "react";
import { ComponentPropsWithoutRef, ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

//#region packages/react/src/types.d.ts
type LenisContextValue = {
  lenis: Lenis;
  addCallback: (callback: ScrollCallback, priority: number) => void;
  removeCallback: (callback: ScrollCallback) => void;
};
type LenisProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * Setup a global instance of Lenis
   * if `asChild`, the component will render wrapper and content divs
   * @default false
   */
  root?: boolean | 'asChild';
  /**
   * Lenis options
   */
  options?: LenisOptions;
  /**
   * Auto-setup requestAnimationFrame
   * @default true
   * @deprecated use options.autoRaf instead
   */
  autoRaf?: boolean;
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Class name to be applied to the wrapper div
   * @default ''
   */
  className?: string | undefined;
};
type LenisRef = {
  /**
   * The wrapper div element
   *
   * Will only be defined if `root` is `false` or `root` is `asChild`
   */
  wrapper: HTMLDivElement | null;
  /**
   * The content div element
   *
   * Will only be defined if `root` is `false` or `root` is `asChild`
   */
  content: HTMLDivElement | null;
  /**
   * The lenis instance
   */
  lenis?: Lenis;
};
//#endregion
//#region packages/react/src/provider.d.ts
declare const LenisContext: react.Context<LenisContextValue | null>;
/**
 * React component to setup a Lenis instance
 */
declare const ReactLenis: ForwardRefExoticComponent<LenisProps & RefAttributes<LenisRef>>;
//#endregion
//#region packages/react/src/use-lenis.d.ts
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
declare function useLenis(callback?: ScrollCallback, deps?: unknown[], priority?: number): Lenis | undefined;
//#endregion
export { ReactLenis as Lenis, ReactLenis, ReactLenis as default, LenisContext, LenisContextValue, LenisProps, LenisRef, useLenis };
//# sourceMappingURL=lenis-react.d.ts.map