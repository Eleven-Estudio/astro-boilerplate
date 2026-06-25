//#region node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/core/constants.js
(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "719bb25958636c71e7f994dd82ed8ed1f05f052c" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a1d99797-3aae-4114-af92-a42d4f82ba4a", e._sentryDebugIdIdentifier = "sentry-dbid-a1d99797-3aae-4114-af92-a42d4f82ba4a");
	} catch (e) {}
})();
var ASTRO_GENERATOR = `Astro v7.0.3`;
var ASTRO_ERROR_HEADER = "X-Astro-Error";
var DEFAULT_404_COMPONENT = "astro-default-404.astro";
var REDIRECT_STATUS_CODES = [
	301,
	302,
	303,
	307,
	308,
	300,
	304
];
var REROUTABLE_STATUS_CODES = [404, 500];
var clientAddressSymbol = /* @__PURE__ */ Symbol.for("astro.clientAddress");
var originPathnameSymbol = /* @__PURE__ */ Symbol.for("astro.originPathname");
var pipelineSymbol = /* @__PURE__ */ Symbol.for("astro.pipeline");
var fetchStateSymbol = /* @__PURE__ */ Symbol.for("astro.fetchState");
var appSymbol = /* @__PURE__ */ Symbol.for("astro.app");
var responseSentSymbol = /* @__PURE__ */ Symbol.for("astro.responseSent");
//#endregion
export { REROUTABLE_STATUS_CODES as a, fetchStateSymbol as c, responseSentSymbol as d, REDIRECT_STATUS_CODES as i, originPathnameSymbol as l, ASTRO_GENERATOR as n, appSymbol as o, DEFAULT_404_COMPONENT as r, clientAddressSymbol as s, ASTRO_ERROR_HEADER as t, pipelineSymbol as u };
