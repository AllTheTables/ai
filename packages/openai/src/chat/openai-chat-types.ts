import { JSONSchema7 } from '@zenning/provider';

export interface OpenAIChatFunctionTool {
  type: 'function';
  function: {
    name: string;
    description: string | undefined;
    parameters: JSONSchema7;
    strict?: boolean;
  };
}

export type OpenAIChatToolChoice =
  | 'auto'
  | 'none'
  | 'required'
  | { type: 'function'; function: { name: string } };
