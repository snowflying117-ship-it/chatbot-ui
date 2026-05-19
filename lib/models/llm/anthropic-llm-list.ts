import { LLM } from "@/types"

const ANTHROPIC_PLATFORM_LINK =
  "https://docs.anthropic.com/claude/reference/getting-started-with-the-api"

// Anthropic Models (UPDATED 05/19/26) -----------------------------

// Claude 4 Opus (UPDATED 05/19/26)
const CLAUDE_4_OPUS: LLM = {
  modelId: "claude-opus-4-20250514",
  modelName: "Claude 4 Opus",
  provider: "anthropic",
  hostedId: "claude-opus-4-20250514",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 15,
    outputCost: 75
  }
}

// Claude 4 Sonnet (UPDATED 05/19/26)
const CLAUDE_4_SONNET: LLM = {
  modelId: "claude-sonnet-4-20250514",
  modelName: "Claude 4 Sonnet",
  provider: "anthropic",
  hostedId: "claude-sonnet-4-20250514",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 15
  }
}

// Claude 3.7 Sonnet (UPDATED 02/24/25)
const CLAUDE_3_7_SONNET: LLM = {
  modelId: "claude-3-7-sonnet-20250219",
  modelName: "Claude 3.7 Sonnet",
  provider: "anthropic",
  hostedId: "claude-3-7-sonnet-20250219",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 15
  }
}

// Claude 3.5 Sonnet v2 (UPDATED 10/22/24)
const CLAUDE_3_5_SONNET_V2: LLM = {
  modelId: "claude-3-5-sonnet-20241022",
  modelName: "Claude 3.5 Sonnet v2",
  provider: "anthropic",
  hostedId: "claude-3-5-sonnet-20241022",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 15
  }
}

// Claude 3.5 Haiku (UPDATED 11/04/24)
const CLAUDE_3_5_HAIKU: LLM = {
  modelId: "claude-3-5-haiku-20241022",
  modelName: "Claude 3.5 Haiku",
  provider: "anthropic",
  hostedId: "claude-3-5-haiku-20241022",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.8,
    outputCost: 4
  }
}

// Claude 3 Haiku (UPDATED 03/13/24)
const CLAUDE_3_HAIKU: LLM = {
  modelId: "claude-3-haiku-20240307",
  modelName: "Claude 3 Haiku",
  provider: "anthropic",
  hostedId: "claude-3-haiku-20240307",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.25,
    outputCost: 1.25
  }
}

export const ANTHROPIC_LLM_LIST: LLM[] = [
  CLAUDE_4_OPUS,
  CLAUDE_4_SONNET,
  CLAUDE_3_7_SONNET,
  CLAUDE_3_5_SONNET_V2,
  CLAUDE_3_5_HAIKU,
  CLAUDE_3_HAIKU
]
