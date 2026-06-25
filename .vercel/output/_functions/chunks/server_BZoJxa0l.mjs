(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "3cfc4a7f4d9de9546a72b0650dc47bc9ba2e7716" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "17cdcd17-cae3-4249-8ea8-8de1fb0b25e5", e._sentryDebugIdIdentifier = "sentry-dbid-17cdcd17-cae3-4249-8ea8-8de1fb0b25e5");
	} catch (e) {}
})();
import { _ as ActionNotFoundError, g as ActionCalledFromServerError, ht as AstroError, p as removeTrailingForwardSlash, t as appendForwardSlash, v as ActionsReturnedInvalidDataError } from "./path_BSZ3kclx.mjs";
import { G as BodySizeLimitError, K as readBodyWithLimit, q as shouldAppendForwardSlash } from "./render_n8yNbuL2.mjs";
import { i as REDIRECT_STATUS_CODES, u as pipelineSymbol } from "./constants_wsK6pROT.mjs";
import { parse, stringify } from "devalue";
import * as z from "zod/v4/core";
//#region node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/actions/consts.js
var ACTION_QUERY_PARAMS = {
	actionName: "_action",
	actionPayload: "_astroActionPayload"
};
//#endregion
//#region node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/actions/runtime/client.js
var codeToStatusMap = {
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	PROXY_AUTHENTICATION_REQUIRED: 407,
	REQUEST_TIMEOUT: 408,
	CONFLICT: 409,
	GONE: 410,
	LENGTH_REQUIRED: 411,
	PRECONDITION_FAILED: 412,
	CONTENT_TOO_LARGE: 413,
	URI_TOO_LONG: 414,
	UNSUPPORTED_MEDIA_TYPE: 415,
	RANGE_NOT_SATISFIABLE: 416,
	EXPECTATION_FAILED: 417,
	MISDIRECTED_REQUEST: 421,
	UNPROCESSABLE_CONTENT: 422,
	LOCKED: 423,
	FAILED_DEPENDENCY: 424,
	TOO_EARLY: 425,
	UPGRADE_REQUIRED: 426,
	PRECONDITION_REQUIRED: 428,
	TOO_MANY_REQUESTS: 429,
	REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
	UNAVAILABLE_FOR_LEGAL_REASONS: 451,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
	HTTP_VERSION_NOT_SUPPORTED: 505,
	VARIANT_ALSO_NEGOTIATES: 506,
	INSUFFICIENT_STORAGE: 507,
	LOOP_DETECTED: 508,
	NETWORK_AUTHENTICATION_REQUIRED: 511
};
var statusToCodeMap = Object.fromEntries(Object.entries(codeToStatusMap).map(([key, value]) => [value, key]));
var ActionError = class ActionError extends Error {
	type = "AstroActionError";
	code = "INTERNAL_SERVER_ERROR";
	status = 500;
	constructor(params) {
		super(params.message);
		this.code = params.code;
		this.status = ActionError.codeToStatus(params.code);
		if (params.stack) this.stack = params.stack;
	}
	static codeToStatus(code) {
		return codeToStatusMap[code];
	}
	static statusToCode(status) {
		return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
	}
	static fromJson(body) {
		if (isInputError(body)) return new ActionInputError(body.issues);
		if (isActionError(body)) return new ActionError(body);
		return new ActionError({ code: "INTERNAL_SERVER_ERROR" });
	}
};
function isActionError(error) {
	return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionError";
}
function isInputError(error) {
	return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionInputError" && "issues" in error && Array.isArray(error.issues);
}
var ActionInputError = class extends ActionError {
	type = "AstroActionInputError";
	issues;
	fields;
	constructor(issues) {
		super({
			message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
			code: "BAD_REQUEST"
		});
		this.issues = issues;
		this.fields = {};
		for (const issue of issues) if (issue.path.length > 0) {
			const key = issue.path[0].toString();
			this.fields[key] ??= [];
			this.fields[key]?.push(issue.message);
		}
	}
};
function deserializeActionResult(res) {
	if (res.type === "error") {
		let json;
		try {
			json = JSON.parse(res.body);
		} catch {
			return {
				data: void 0,
				error: new ActionError({
					message: res.body,
					code: "INTERNAL_SERVER_ERROR"
				})
			};
		}
		if (Object.assign({
			"ASSETS_PREFIX": void 0,
			"BASE_URL": "/.",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SITE": "https://example.com",
			"SSR": true
		}, {})?.PROD) return {
			error: ActionError.fromJson(json),
			data: void 0
		};
		else {
			const error = ActionError.fromJson(json);
			error.stack = actionResultErrorStack.get();
			return {
				error,
				data: void 0
			};
		}
	}
	if (res.type === "empty") return {
		data: void 0,
		error: void 0
	};
	return {
		data: parse(res.body, { URL: (href) => new URL(href) }),
		error: void 0
	};
}
var actionResultErrorStack = /* @__PURE__ */ (function actionResultErrorStackFn() {
	let errorStack;
	return {
		set(stack) {
			errorStack = stack;
		},
		get() {
			return errorStack;
		}
	};
})();
function getActionQueryString(name) {
	return `?${new URLSearchParams({ [ACTION_QUERY_PARAMS.actionName]: name }).toString()}`;
}
function getActionPathFromString({ baseUrl, shouldAppendTrailingSlash, path: input }) {
	let path = `${baseUrl.replace(/\/$/, "")}/_actions/${new URLSearchParams(input).get(ACTION_QUERY_PARAMS.actionName)}`;
	if (shouldAppendTrailingSlash) path = appendForwardSlash(path);
	return path;
}
function createGetActionPath(options) {
	return function getActionPath(action) {
		return getActionPathFromString({
			baseUrl: options.baseUrl,
			shouldAppendTrailingSlash: options.shouldAppendTrailingSlash,
			path: action.toString()
		});
	};
}
var ENCODED_DOT = "%2E";
function createActionsProxy({ actionCallback = {}, aggregatedPath = "", handleAction }) {
	return new Proxy(actionCallback, { get(target, objKey) {
		if (target.hasOwnProperty(objKey) || typeof objKey === "symbol") return target[objKey];
		const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
		function action(param) {
			return handleAction(param, path, this);
		}
		Object.assign(action, {
			queryString: getActionQueryString(path),
			toString: () => action.queryString,
			bind: action.bind,
			valueOf: () => action.valueOf,
			$$FORM_ACTION: function() {
				return {
					method: "POST",
					name: "_astroAction",
					action: "?" + new URLSearchParams(action.toString()).toString()
				};
			},
			async orThrow(param) {
				const { data, error } = await handleAction(param, path, this);
				if (error) throw error;
				return data;
			}
		});
		return createActionsProxy({
			actionCallback: action,
			aggregatedPath: path + ".",
			handleAction
		});
	} });
}
//#endregion
//#region node_modules/.pnpm/astro@7.0.3_@emnapi+core@1.11.1_@emnapi+runtime@1.11.1_@types+node@24.12.3_@vercel+func_99b77dd656545ed448096ce0a00f258a/node_modules/astro/dist/actions/runtime/server.js
function defineAction({ accept, input: inputSchema, handler }) {
	const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
	async function safeServerHandler(unparsedInput) {
		if (typeof this === "function" || !isActionAPIContext(this)) throw new AstroError(ActionCalledFromServerError);
		return callSafely(() => serverHandler(unparsedInput, this));
	}
	Object.assign(safeServerHandler, { orThrow(unparsedInput) {
		if (typeof this === "function") throw new AstroError(ActionCalledFromServerError);
		return serverHandler(unparsedInput, this);
	} });
	return safeServerHandler;
}
function getFormServerHandler(handler, inputSchema) {
	return async (unparsedInput, context) => {
		if (!(unparsedInput instanceof FormData)) throw new ActionError({
			code: "UNSUPPORTED_MEDIA_TYPE",
			message: "This action only accepts FormData."
		});
		if (!inputSchema) return await handler(unparsedInput, context);
		const parsed = await parseFormInput(inputSchema, unparsedInput);
		if (!parsed.success) throw new ActionInputError(parsed.error.issues);
		return await handler(parsed.data, context);
	};
}
async function parseFormInput(inputSchema, unparsedInput) {
	const baseSchema = unwrapBaseZ4ObjectSchema(inputSchema, unparsedInput);
	const input = baseSchema instanceof z.$ZodObject ? formDataToObject(unparsedInput, baseSchema) : unparsedInput;
	return await z.safeParseAsync(inputSchema, input);
}
function getJsonServerHandler(handler, inputSchema) {
	return async (unparsedInput, context) => {
		if (unparsedInput instanceof FormData) throw new ActionError({
			code: "UNSUPPORTED_MEDIA_TYPE",
			message: "This action only accepts JSON."
		});
		if (!inputSchema) return await handler(unparsedInput, context);
		const parsed = await z.safeParseAsync(inputSchema, unparsedInput);
		if (!parsed.success) throw new ActionInputError(parsed.error.issues);
		return await handler(parsed.data, context);
	};
}
function getActionContext(context) {
	const callerInfo = getCallerInfo(context);
	const actionResultAlreadySet = Boolean(context.locals._actionPayload);
	let action = void 0;
	if (callerInfo && context.request.method === "POST" && !actionResultAlreadySet) action = {
		calledFrom: callerInfo.from,
		name: callerInfo.name,
		handler: async () => {
			const pipeline = Reflect.get(context, pipelineSymbol);
			const callerInfoName = shouldAppendForwardSlash(pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat) ? removeTrailingForwardSlash(callerInfo.name) : callerInfo.name;
			let baseAction;
			try {
				baseAction = await pipeline.getAction(callerInfoName);
			} catch (error) {
				if (error instanceof Error && "name" in error && typeof error.name === "string" && error.name === ActionNotFoundError.name) return {
					data: void 0,
					error: new ActionError({ code: "NOT_FOUND" })
				};
				throw error;
			}
			const bodySizeLimit = pipeline.manifest.actionBodySizeLimit;
			let input;
			try {
				input = await parseRequestBody(context.request, bodySizeLimit);
			} catch (e) {
				if (e instanceof ActionError) return {
					data: void 0,
					error: e
				};
				if (e instanceof TypeError) return {
					data: void 0,
					error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" })
				};
				throw e;
			}
			const omitKeys = [
				"props",
				"getActionResult",
				"callAction",
				"redirect"
			];
			const actionAPIContext = Object.create(Object.getPrototypeOf(context), Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(context)).filter(([key]) => !omitKeys.includes(key))));
			Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
			return baseAction.bind(actionAPIContext)(input);
		}
	};
	function setActionResult(actionName, actionResult) {
		context.locals._actionPayload = {
			actionResult,
			actionName
		};
	}
	return {
		action,
		setActionResult,
		serializeActionResult,
		deserializeActionResult
	};
}
function getCallerInfo(ctx) {
	if (ctx.routePattern === "/_actions/[...path]") return {
		from: "rpc",
		name: ctx.url.pathname.replace(/^.*\/_actions\//, "")
	};
	const queryParam = ctx.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
	if (queryParam) return {
		from: "form",
		name: queryParam
	};
}
async function parseRequestBody(request, bodySizeLimit) {
	const contentType = request.headers.get("content-type");
	const contentLengthHeader = request.headers.get("content-length");
	const contentLength = contentLengthHeader ? Number.parseInt(contentLengthHeader, 10) : void 0;
	const hasContentLength = typeof contentLength === "number" && Number.isFinite(contentLength);
	if (!contentType) return void 0;
	if (hasContentLength && contentLength > bodySizeLimit) throw new ActionError({
		code: "CONTENT_TOO_LARGE",
		message: `Request body exceeds ${bodySizeLimit} bytes`
	});
	try {
		if (hasContentType(contentType, formContentTypes)) {
			if (!hasContentLength) {
				const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
				return await new Request(request.url, {
					method: request.method,
					headers: request.headers,
					body: toArrayBuffer(body)
				}).formData();
			}
			return await request.clone().formData();
		}
		if (hasContentType(contentType, ["application/json"])) {
			if (contentLength === 0) return void 0;
			if (!hasContentLength) {
				const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
				if (body.byteLength === 0) return void 0;
				return JSON.parse(new TextDecoder().decode(body));
			}
			return await request.clone().json();
		}
	} catch (e) {
		if (e instanceof BodySizeLimitError) throw new ActionError({
			code: "CONTENT_TOO_LARGE",
			message: `Request body exceeds ${bodySizeLimit} bytes`
		});
		throw e;
	}
	throw new TypeError("Unsupported content type");
}
var ACTION_API_CONTEXT_SYMBOL = /* @__PURE__ */ Symbol.for("astro.actionAPIContext");
var formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function hasContentType(contentType, expected) {
	const type = contentType.split(";")[0].toLowerCase();
	return expected.some((t) => type === t);
}
function isActionAPIContext(ctx) {
	return Reflect.get(ctx, ACTION_API_CONTEXT_SYMBOL) === true;
}
function formDataToObject(formData, schema, prefix = "") {
	const formKeys = [...formData.keys()];
	const obj = schema._zod.def.catchall ? Object.fromEntries([...formData.entries()].filter(([k]) => k.startsWith(prefix)).map(([k, v]) => [k.slice(prefix.length), v])) : {};
	for (const [key, baseValidator] of Object.entries(schema._zod.def.shape)) {
		const prefixedKey = prefix + key;
		let validator = baseValidator;
		while (validator instanceof z.$ZodOptional || validator instanceof z.$ZodNullable || validator instanceof z.$ZodDefault) {
			if (validator instanceof z.$ZodDefault && !formDataHasKeyOrPrefix(formKeys, prefixedKey)) obj[key] = validator._zod.def.defaultValue instanceof Function ? validator._zod.def.defaultValue() : validator._zod.def.defaultValue;
			validator = validator._zod.def.innerType;
		}
		while (validator instanceof z.$ZodPipe) validator = validator._zod.def.in;
		if (validator instanceof z.$ZodDiscriminatedUnion) {
			const typeKey = validator._zod.def.discriminator;
			const typeValue = formData.get(prefixedKey + "." + typeKey);
			if (typeof typeValue === "string") {
				const match = validator._zod.def.options.find((option) => option.def.shape[typeKey].values.has(typeValue));
				if (match) validator = match;
			}
		}
		if (validator instanceof z.$ZodObject) {
			const nestedPrefix = prefixedKey + ".";
			if (formKeys.some((k) => k.startsWith(nestedPrefix))) obj[key] = formDataToObject(formData, validator, nestedPrefix);
			else if (!(key in obj)) obj[key] = baseValidator instanceof z.$ZodNullable ? null : void 0;
		} else if (!formData.has(prefixedKey) && key in obj) continue;
		else if (validator instanceof z.$ZodBoolean) {
			const val = formData.get(prefixedKey);
			obj[key] = val === "true" ? true : val === "false" ? false : formData.has(prefixedKey);
		} else if (validator instanceof z.$ZodArray) obj[key] = handleFormDataGetAll(prefixedKey, formData, validator);
		else obj[key] = handleFormDataGet(prefixedKey, formData, validator, baseValidator);
	}
	return obj;
}
function formDataHasKeyOrPrefix(formKeys, key) {
	const prefix = key + ".";
	return formKeys.some((k) => k === key || k.startsWith(prefix));
}
function handleFormDataGetAll(key, formData, validator) {
	const entries = Array.from(formData.getAll(key));
	const elementValidator = validator._zod.def.element;
	if (elementValidator instanceof z.$ZodNumber) return entries.map(Number);
	else if (elementValidator instanceof z.$ZodBoolean) return entries.map((v) => v === "true" ? true : v === "false" ? false : Boolean(v));
	return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
	const value = formData.get(key);
	if (!value) return baseValidator instanceof z.$ZodOptional ? void 0 : null;
	return validator instanceof z.$ZodNumber ? Number(value) : value;
}
function unwrapBaseZ4ObjectSchema(schema, unparsedInput) {
	if (schema instanceof z.$ZodPipe) return unwrapBaseZ4ObjectSchema(schema._zod.def.in, unparsedInput);
	if (schema instanceof z.$ZodDiscriminatedUnion) {
		const typeKey = schema._zod.def.discriminator;
		const typeValue = unparsedInput.get(typeKey);
		if (typeof typeValue !== "string") return schema;
		const objSchema = schema._zod.def.options.find((option) => option.def.shape[typeKey].values.has(typeValue));
		if (!objSchema) return schema;
		return objSchema;
	}
	return schema;
}
async function callSafely(handler) {
	try {
		return {
			data: await handler(),
			error: void 0
		};
	} catch (e) {
		if (e instanceof ActionError) return {
			data: void 0,
			error: e
		};
		return {
			data: void 0,
			error: new ActionError({
				message: e instanceof Error ? e.message : "Unknown error",
				code: "INTERNAL_SERVER_ERROR"
			})
		};
	}
}
function serializeActionResult(res) {
	if (res.error) {
		if (Object.assign({
			"ASSETS_PREFIX": void 0,
			"BASE_URL": "/.",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SITE": "https://example.com",
			"SSR": true
		}, {})?.DEV) actionResultErrorStack.set(res.error.stack);
		let body2;
		if (res.error instanceof ActionInputError) body2 = {
			type: res.error.type,
			issues: res.error.issues,
			fields: res.error.fields
		};
		else body2 = {
			...res.error,
			message: res.error.message
		};
		return {
			type: "error",
			status: res.error.status,
			contentType: "application/json",
			body: JSON.stringify(body2)
		};
	}
	if (res.data === void 0) return {
		type: "empty",
		status: 204
	};
	let body;
	try {
		body = stringify(res.data, { URL: (value) => value instanceof URL && value.href });
	} catch (e) {
		let hint = ActionsReturnedInvalidDataError.hint;
		if (res.data instanceof Response) hint = REDIRECT_STATUS_CODES.includes(res.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes";
		throw new AstroError({
			...ActionsReturnedInvalidDataError,
			message: ActionsReturnedInvalidDataError.message(String(e)),
			hint
		});
	}
	return {
		type: "data",
		status: 200,
		contentType: "application/json+devalue",
		body
	};
}
function toArrayBuffer(buffer) {
	const copy = new Uint8Array(buffer.byteLength);
	copy.set(buffer);
	return copy.buffer;
}
//#endregion
export { ActionError as a, deserializeActionResult as c, serializeActionResult as i, getActionQueryString as l, defineAction as n, createActionsProxy as o, getActionContext as r, createGetActionPath as s, ACTION_API_CONTEXT_SYMBOL as t };
