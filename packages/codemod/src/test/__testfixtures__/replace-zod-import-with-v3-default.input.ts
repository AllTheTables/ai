// @ts-nocheck
import z from 'zod';
import { generateText } from '@zenning/ai';

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

export { schema };
