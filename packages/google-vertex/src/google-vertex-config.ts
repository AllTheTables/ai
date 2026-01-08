import { FetchFunction, Resolvable } from '@zenning/provider-utils';

export interface GoogleVertexConfig {
  provider: string;
  baseURL: string;
  headers: Resolvable<Record<string, string | undefined>>;
  fetch?: FetchFunction;
}
