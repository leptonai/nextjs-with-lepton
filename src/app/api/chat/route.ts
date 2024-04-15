import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

const openai = new OpenAI({
  // Use the LEPTON_API_TOKEN environment variable
  apiKey: process.env?.LEPTON_API_TOKEN || "Invalid API Key",
  baseURL: 'https://mixtral-8x7b.lepton.run/api/v1/',
});

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
  
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'mixtral-8x7b',
    stream: true,
    messages: messages,
  });
  
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
