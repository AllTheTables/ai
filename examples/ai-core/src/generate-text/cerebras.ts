import 'dotenv/config';
import { cerebras as provider } from '@zenning/cerebras';
import { generateText } from '@zenning/ai';

async function main() {
  const result = await generateText({
    model: provider.chat('llama-3.1-70b'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(result.text);
  console.log();
  console.log('Token usage:', result.usage);
  console.log('Finish reason:', result.finishReason);
}

main().catch(console.error);
