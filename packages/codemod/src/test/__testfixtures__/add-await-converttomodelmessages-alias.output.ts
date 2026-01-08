// @ts-nocheck
import { convertToModelMessages as toModel } from '@zenning/ai';

async function processMessages(uiMessages: any[]) {
  const modelMessages = await toModel(uiMessages);
  return modelMessages;
}

