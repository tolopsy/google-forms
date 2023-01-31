import {generatePath} from "react-router";

class RouteNotExist extends Error {
  name = "RouteNotExist";
}

const routes = {
  "home": "/",
};

export function getPath(routeName: keyof typeof routes): string {
  if (!routes[routeName]) {
    throw new RouteNotExist(`Unknown route "${routeName}"`);
  }

  return routes[routeName];
}

export function url(routeName: keyof typeof routes, routeParams?: Record<string, string | number | undefined>): string {
  return generatePath(getPath(routeName), routeParams);
}
