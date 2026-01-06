'use server';

import { openai } from '@zenning/openai';
import { streamText } from 'ai';
import { createStreamableValue } from '@zenning/rsc';

export async function generateCompletion(prompt: string) {
  const result = streamText({
    model: openai('gpt-4-turbo'),
    maxOutputTokens: 2000,
    prompt,
  });

  return createStreamableValue(result.textStream).value;
}
