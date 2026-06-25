//#region \0virtual:astro:server-island-manifest
(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "719bb25958636c71e7f994dd82ed8ed1f05f052c" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "708871e6-4c63-4b87-a919-4a9b673071c3", e._sentryDebugIdIdentifier = "sentry-dbid-708871e6-4c63-4b87-a919-4a9b673071c3");
	} catch (e) {}
})();
var serverIslandMap = /* @__PURE__ */ new Map([]);
var serverIslandNameMap = /* @__PURE__ */ new Map([]);
//#endregion
export { serverIslandMap, serverIslandNameMap };
