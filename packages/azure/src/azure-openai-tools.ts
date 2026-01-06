import {
  codeInterpreter,
  fileSearch,
  imageGeneration,
  webSearchPreview,
} from '@zenning/openai/internal';

export const azureOpenaiTools: {
  codeInterpreter: typeof codeInterpreter;
  fileSearch: typeof fileSearch;
  imageGeneration: typeof imageGeneration;
  webSearchPreview: typeof webSearchPreview;
} = {
  codeInterpreter,
  fileSearch,
  imageGeneration,
  webSearchPreview,
};
