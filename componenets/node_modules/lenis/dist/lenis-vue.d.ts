import Lenis, { LenisOptions, ScrollCallback } from "lenis";
import * as vue from "vue";
import { ComputedRef, HTMLAttributes, Plugin, PropType } from "vue";

//#region packages/vue/src/provider.d.ts
type LenisExposed = {
  wrapper?: HTMLDivElement;
  content?: HTMLDivElement;
  lenis?: Lenis;
};
declare const VueLenisImpl: vue.DefineComponent<vue.ExtractPropTypes<{
  root: {
    type: PropType<boolean>;
    default: boolean;
  };
  autoRaf: {
    type: PropType<boolean>;
    default: boolean;
  };
  options: {
    type: PropType<LenisOptions>;
    default: () => {};
  };
  props: {
    type: PropType<HTMLAttributes>;
    default: () => {};
  };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
  [key: string]: any;
}> | vue.VNode<vue.RendererNode, vue.RendererElement, {
  [key: string]: any;
}>[] | undefined, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
  root: {
    type: PropType<boolean>;
    default: boolean;
  };
  autoRaf: {
    type: PropType<boolean>;
    default: boolean;
  };
  options: {
    type: PropType<LenisOptions>;
    default: () => {};
  };
  props: {
    type: PropType<HTMLAttributes>;
    default: () => {};
  };
}>> & Readonly<{}>, {
  props: HTMLAttributes;
  root: boolean;
  autoRaf: boolean;
  options: LenisOptions;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;
declare const VueLenis: typeof VueLenisImpl & {
  new (): LenisExposed;
};
declare const vueLenisPlugin: Plugin;
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    'vue-lenis': typeof VueLenis;
  }
}
//#endregion
//#region packages/vue/src/use-lenis.d.ts
declare function useLenis(callback?: ScrollCallback, priority?: number): ComputedRef<Lenis | undefined>;
//#endregion
export { VueLenis as Lenis, VueLenis, vueLenisPlugin as default, useLenis };
//# sourceMappingURL=lenis-vue.d.ts.map