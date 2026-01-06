import { openai } from '@zenning/openai';
import { convertToModelMessages, streamText, UIMessage } from '@zenning/ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai.responses('o3-mini'),
    messages: await convertToModelMessages(messages),
    providerOptions: {
      openai: {
        reasoningEffort: 'low',
        reasoningSummary: 'auto',
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
