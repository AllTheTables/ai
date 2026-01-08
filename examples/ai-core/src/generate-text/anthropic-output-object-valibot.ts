import { anthropic } from '@zenning/anthropic';
import { valibotSchema } from '@zenning/valibot';
import { generateText, Output } from '@zenning/ai';
import * as v from 'valibot';
import { run } from '../lib/run';

run(async () => {
  const result = await generateText({
    model: anthropic('claude-3-7-sonnet-latest'),
    output: Output.object({
      schema: valibotSchema(
        v.object({
          recipe: v.object({
            name: v.string(),
            ingredients: v.array(
              v.object({
                name: v.string(),
                amount: v.string(),
              }),
            ),
            steps: v.array(v.string()),
          }),
        }),
      ),
    }),
    prompt: 'Generate a lasagna recipe.',
  });

  console.dir(result.output.recipe, { depth: Infinity });
});
