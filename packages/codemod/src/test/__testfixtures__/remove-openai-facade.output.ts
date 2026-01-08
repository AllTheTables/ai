// @ts-nocheck
import { createOpenAI } from '@zenning/openai';

const openai = createOpenAI({
  apiKey: 'key',
  baseURL: 'url',
  headers: { 'custom': 'header' }
});
