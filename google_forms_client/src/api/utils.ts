import _has from "lodash/has"
import _get from "lodash/get"
import _set from "lodash/set"


class APIError extends Error {
  readonly resp: Response;

  constructor(resp: Response) {
    super();
    this.resp = resp;
  }
}

export class InvalidRequestError extends APIError {
  name = "InvalidRequestError"
}

export class InternalServerError extends APIError {
  name = "InternalServerError"
}

export function is5xx(status: number) {
  return Math.floor(status / 100) === 5;
}

export function is2xx(status: number) {
  return Math.floor(status / 100) === 2;
}

export function is4xx(status: number) {
  return Math.floor(status / 100) === 4;
}

export function remap(obj: any, fieldMap: Record<string, string>) {
  const resultObj = {}

  Object.entries(fieldMap).forEach(([fromField, toField]) => {
    if (_has(obj, fromField)) {
      _set(resultObj, toField, _get(obj, fromField));
    }
  })

  return resultObj;
}
