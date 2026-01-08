import { openaiShellAgent } from '@/agent/openai-shell-agent';
import { createAgentUIStreamResponse } from '@zenning/ai';

export async function POST(req: Request) {
  const body = await req.json();

  return createAgentUIStreamResponse({
    agent: openaiShellAgent,
    uiMessages: body.messages,
  });
}
