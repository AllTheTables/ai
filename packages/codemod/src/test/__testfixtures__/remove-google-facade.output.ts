// @ts-nocheck
import { createGoogleGenerativeAI } from '@zenning/google';

const google = createGoogleGenerativeAI({
  apiKey: 'key',
  baseURL: 'url',
  headers: { 'custom': 'header' }
});
