import { createAI } from '@zenning/rsc';
import { AIState, submitUserMessage, UIState } from './actions';
import { generateId } from '@zenning/ai';

export const AI = createAI({
  actions: { submitUserMessage },
  initialUIState: [] as UIState,
  initialAIState: { chatId: generateId(), messages: [] } as AIState,
});
