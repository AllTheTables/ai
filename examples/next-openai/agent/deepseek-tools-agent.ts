import { weatherTool } from '@/tool/weather-tool';
import { deepseek } from '@zenning/deepseek';
import { InferAgentUIMessage, ToolLoopAgent } from '@zenning/ai';

export const deepseekToolsAgent = new ToolLoopAgent({
  model: deepseek('deepseek-reasoner'),
  tools: { weather: weatherTool },
});

export type DeepSeekToolsAgentMessage = InferAgentUIMessage<
  typeof deepseekToolsAgent
>;
