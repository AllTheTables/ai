// @ts-nocheck
import { createMistral } from '@zenning/mistral';

const mistral = createMistral({
  apiKey: 'key',
  baseURL: 'url',
  headers: { 'custom': 'header' }
});
