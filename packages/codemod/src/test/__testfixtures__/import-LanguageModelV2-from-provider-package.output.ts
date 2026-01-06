// @ts-nocheck
import { LanguageModelV2 } from '@zenning/provider';
import { LanguageModelV2 } from '@zenning/provider';
import { LanguageModelV2Middleware } from '@zenning/provider';
import { LanguageModelV2Middleware } from '@zenning/provider';
import { someOtherFunction } from 'ai';

// Multiple imports in one declaration
import {
  LanguageModelV2 as LMV1Multi,
  LanguageModelV2 as LMV2Multi,
  LanguageModelV2Middleware as LMV1MiddlewareMulti,
  LanguageModelV2Middleware as LMV2MiddlewareMulti,
} from '@zenning/provider';

import { anotherFunction } from 'ai';

// Import with alias
import { LanguageModelV2 as LMV1 } from '@zenning/provider';

// Mixed imports
import { LanguageModelV2 as LMV1Mixed } from '@zenning/provider';

import { generateText } from 'ai';

// Should not affect other packages
import { LanguageModelV1 as LMV1Other } from 'some-other-package';
import { LanguageModelV2 as LMV2Other } from 'another-package';
