import axios from 'axios';
import { CompletionService } from '../interfaces/completion.interface';

export class ClaudeAIAdapter implements CompletionService {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async complete(prompt: string, maxTokens: number): Promise<string> {
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${this.apiKey}`;
      axios.defaults.headers.common['Content-Type'] = `application/json`;

      const response = await axios.post<ClaudeAIResponse>(this.apiUrl, {
        prompt,
        model: 'claude-v1',
        max_tokens_to_sample: maxTokens,
        stop_sequences: ['\n\nHuman:'],
      });

      // Return the first choice from the response
      return response.data.choices[0].text;
    } catch (error) {
      console.error('Error completing prompt:', error);
      throw error;
    }
  }
}

interface ClaudeAIResponse {
  choices: { text: string }[];
}