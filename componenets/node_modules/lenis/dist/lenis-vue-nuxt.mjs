import { addComponent, addImports, addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
export * from "lenis/vue";
//#region packages/vue/nuxt/module.ts
const nuxtModule = defineNuxtModule({
	meta: {
		name: "lenis/nuxt",
		configKey: "lenis"
	},
	defaults: {},
	setup(_options, _nuxt) {
		const { resolve } = createResolver(import.meta.url);
		addPlugin({
			src: resolve("./nuxt/runtime/lenis.mjs"),
			name: "lenis"
		});
		addImports({
			name: "useLenis",
			from: "lenis/vue"
		});
		addComponent({
			name: "VueLenis",
			filePath: "lenis/vue",
			global: true,
			export: "VueLenis"
		});
	}
});
//#endregion
export { nuxtModule as default };
