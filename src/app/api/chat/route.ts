import {streamText} from 'ai';
export const runtime = 'edge';
import { createOpenAI } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const model = createOpenAI({
    apiKey: process.env?.LEPTON_API_TOKEN || "Invalid API Key",
    baseURL: 'https://mixtral-8x7b.lepton.run/api/v1/',
  })
  const result = streamText({
    model: model('mixtral-8x7b'),
    messages,
  });
  return result.toDataStreamResponse();
}
