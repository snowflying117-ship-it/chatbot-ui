import { ModelProvider } from "."

// LLMID now accepts any string to support custom models
export type LLMID = string

// Legacy type aliases (kept for backward compatibility)
export type OpenAILLMID = string
export type GoogleLLMID = string
export type AnthropicLLMID = string
export type MistralLLMID = string
export type GroqLLMID = string
export type PerplexityLLMID = string
export type DeepSeekLLMID = string

export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  maxContext?: number
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
