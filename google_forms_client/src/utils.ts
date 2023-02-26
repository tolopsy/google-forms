import {fromUnixTime} from "date-fns";

export function parseDateTime(date: string): number {
  return Math.floor(Date.parse(date) / 1000);
}

export function toDate(ts: number): Date {
  return fromUnixTime(ts);
}
