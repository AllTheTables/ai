// @ts-nocheck
import { z } from 'zod/v3';
import { generateText } from '@zenning/ai';

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

export { schema };
