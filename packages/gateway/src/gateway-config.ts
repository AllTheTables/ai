import type { FetchFunction, Resolvable } from '@zenning/provider-utils';

export type GatewayConfig = {
  baseURL: string;
  headers: () => Resolvable<Record<string, string | undefined>>;
  fetch?: FetchFunction;
};
