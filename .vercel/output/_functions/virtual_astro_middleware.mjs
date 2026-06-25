(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "3cfc4a7f4d9de9546a72b0650dc47bc9ba2e7716" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "dfaa9baf-a4dd-44b0-896c-4f2f789226aa", e._sentryDebugIdIdentifier = "sentry-dbid-dfaa9baf-a4dd-44b0-896c-4f2f789226aa");
	} catch (e) {}
})();
import { F as sequence } from "./chunks/render_n8yNbuL2.mjs";
import { onRequest as onRequest$1 } from "@sentry/astro/middleware";
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };
