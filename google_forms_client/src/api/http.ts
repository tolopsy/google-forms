import {BACKENDS} from "./config";
import {is5xx, is4xx, InternalServerError, InvalidRequestError} from "./utils";


export function buildApiUrl(
  backend: keyof typeof BACKENDS,
  path: string,
  queryParams?: Record<string, string>,
) {
  let url = BACKENDS[backend] + path;

  if (queryParams) {
    url += "?" + (new URLSearchParams(queryParams)).toString()
  }

  return url;
}

export type FetchApiOptions = {
  backend?: keyof typeof BACKENDS
  queryParams?: Record<string, string>
  bodyParams?: any
  acceptContentType?: string
  omitContentType?: boolean
  includeCredentials?: boolean
}

export function fetchApi(method: string, path: string, options?: FetchApiOptions) {
  const backend = options?.backend ?? "ROOT";
  const url = buildApiUrl(
    backend,
    path,
    options?.queryParams
  );

  let body = null;
  if (options?.bodyParams) {
    body = JSON.stringify(options.bodyParams);
  }

  const headers: Record<string, string> = {}

  if (!options?.omitContentType) {
    headers["Content-Type"] = "application/json";
  }

  if (options?.acceptContentType === undefined) {
    headers["Accept"] = "application/json";
  } else {
    headers["Accept"] = options.acceptContentType;
  }

  return fetch(url, {
    method,
    headers,
    credentials: options?.includeCredentials ? "include" : "omit",
    body,
  }).then((resp) => {
    if (is5xx(resp.status)) {
      return Promise.reject(new InternalServerError(resp))
    } else if (is4xx(resp.status)) {
      return Promise.reject(new InvalidRequestError(resp))
    }

    return resp
  })
}
