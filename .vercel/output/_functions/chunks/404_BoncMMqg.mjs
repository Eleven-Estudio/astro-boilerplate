(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "3cfc4a7f4d9de9546a72b0650dc47bc9ba2e7716" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b255704b-587b-4755-89a0-4b4a206fa206", e._sentryDebugIdIdentifier = "sentry-dbid-b255704b-587b-4755-89a0-4b4a206fa206");
	} catch (e) {}
})();
import { t as __exportAll } from "./rolldown-runtime_JjpOe7e9.mjs";
import { C as renderTemplate, E as maybeRenderHead, M as createComponent, O as addAttribute, b as renderComponent } from "./render_n8yNbuL2.mjs";
import "./_astro_assets_OpLadyi7.mjs";
import { t as $$BaseLayout } from "./base-layout_C9EhCtGF.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="h-screen flex flex-col justify-center items-center gap-6"><img class="max-w-[350px]" src="/images/404.svg" alt="404"${addAttribute(350, "width")}><div class="flex flex-col gap-1 text-center"><h1 class="text-4xl font-bold text-gray-700">Oops!, Página no encontrada</h1><p class="text-2xl text-gray-400">El enlace puede estar dañado</p><small class="text-sm text-gray-600">o la página pudo haber sido removida</small></div><a href="/" class="bg-black py-3 px-4 rounded-sm text-white text-sm font-bold hover:bg-slate-900">Regresar al inicio</a></main>` })}`;
}, "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/pages/404.astro", void 0);
var $$file = "/Users/mpacheco/Documents/ElevenStudio/PROJECT-astro-boilerplate /astro-boilerplate/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
