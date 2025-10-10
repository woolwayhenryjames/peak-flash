import type { MiddlewareFunction } from "react-router";
import { isPrefetch } from "remix-utils/is-prefetch";

export const headersMiddleware: MiddlewareFunction = async (
  { request },
  next
) => {
  const response = await next();
  if (response instanceof Response) {
    if (isPrefetch(request)) {
      response.headers.set("Cache-Control", "private, max-age=30, smax-age=0");
    } else {
      response.headers.set("Cache-Control", "private, max-age=10, smax-age=0");
    }
  }

  return response;
};
