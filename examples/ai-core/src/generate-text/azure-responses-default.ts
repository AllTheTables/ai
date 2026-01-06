import 'dotenv/config';
import { createAzure } from '@zenning/azure';
import { generateText } from '@zenning/ai';

const azureDefault = createAzure({
  fetch: async (input, init) => {
    console.log('Azure  request URL:', input);
    return fetch(input, init);
  },
});

async function main() {
  const result = await generateText({
    model: azureDefault('gpt-5-nano'),
    prompt: 'Write a short poem about the sea.',
  });

  console.log(result.text);
}

main().catch(console.error);
