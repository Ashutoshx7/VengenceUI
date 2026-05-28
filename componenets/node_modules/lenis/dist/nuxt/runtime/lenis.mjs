import vuePlugin from "lenis/vue";
import { defineNuxtPlugin } from "#imports";
//#region packages/vue/nuxt/runtime/lenis.ts
const plugin = defineNuxtPlugin({
	name: "lenis",
	setup(nuxtApp) {
		nuxtApp.vueApp.use(vuePlugin);
	}
});
//#endregion
export { plugin as default };
