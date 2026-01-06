// @ts-nocheck
import { LanguageModelV1 } from '@zenning/ai';
import { LanguageModelV2 } from '@zenning/ai';
import { LanguageModelV1Middleware } from '@zenning/ai';
import { LanguageModelV2Middleware } from '@zenning/ai';
import { someOtherFunction } from '@zenning/ai';

// Multiple imports in one declaration
import { 
  LanguageModelV1 as LMV1Multi, 
  LanguageModelV2 as LMV2Multi, 
  LanguageModelV1Middleware as LMV1MiddlewareMulti,
  LanguageModelV2Middleware as LMV2MiddlewareMulti,
  anotherFunction 
} from '@zenning/ai';

// Import with alias
import { LanguageModelV1 as LMV1 } from '@zenning/ai';

// Mixed imports
import { LanguageModelV1 as LMV1Mixed, generateText } from '@zenning/ai';

// Should not affect other packages
import { LanguageModelV1 as LMV1Other } from 'some-other-package';
import { LanguageModelV2 as LMV2Other } from 'another-package';
