import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";

export type Usage = {
  completion_tokens: number;
  prompt_token: number;
  total_token: number;
};

export interface Message extends ChatCompletionRequestMessage {
  content: string;
  role: ChatCompletionRequestMessageRoleEnum;
}

export type Choice = {
  finish_reason: string;
  index: number;
  message: {
    content: string;
    role: string;
  };
};

export type OpenAiResponse = {
  created: number;
  id: string;
  model: string;
  object: string;
  usage: Usage;
  choices: Choice[];
};
