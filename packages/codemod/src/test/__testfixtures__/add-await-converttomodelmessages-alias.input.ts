// @ts-nocheck
import { convertToModelMessages as toModel } from '@zenning/ai';

async function processMessages(uiMessages: any[]) {
  const modelMessages = toModel(uiMessages);
  return modelMessages;
}

