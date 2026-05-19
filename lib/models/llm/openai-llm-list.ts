import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 05/19/26) -----------------------------

// GPT-5.4 — Current flagship (March 2026)
const GPT54: LLM = {
  modelId: "gpt-5.4",
  modelName: "GPT-5.4",
  provider: "openai",
  hostedId: "gpt-5.4",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 272000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 2.5, outputCost: 15 }
}

// GPT-5.4-mini
const GPT54Mini: LLM = {
  modelId: "gpt-5.4-mini",
  modelName: "GPT-5.4 Mini",
  provider: "openai",
  hostedId: "gpt-5.4-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 272000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 0.25, outputCost: 1 }
}

// GPT-5.4-nano — Ultra budget
const GPT54Nano: LLM = {
  modelId: "gpt-5.4-nano",
  modelName: "GPT-5.4 Nano",
  provider: "openai",
  hostedId: "gpt-5.4-nano",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 272000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 0.05, outputCost: 0.4 }
}

// GPT-5.4-pro — Premium reasoning
const GPT54Pro: LLM = {
  modelId: "gpt-5.4-pro",
  modelName: "GPT-5.4 Pro",
  provider: "openai",
  hostedId: "gpt-5.4-pro",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 272000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 30, outputCost: 180 }
}

// GPT-5.4-thinking — Test-time reasoning
const GPT54Thinking: LLM = {
  modelId: "gpt-5.4-thinking",
  modelName: "GPT-5.4 Thinking",
  provider: "openai",
  hostedId: "gpt-5.4-thinking",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 272000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 2.5, outputCost: 15 }
}

// GPT-5.1-codex — Coding specialist
const GPT51Codex: LLM = {
  modelId: "gpt-5.1-codex",
  modelName: "GPT-5.1 Codex",
  provider: "openai",
  hostedId: "gpt-5.1-codex",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false,
  maxContext: 272000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 2.5, outputCost: 15 }
}

// GPT-4.1 — Long context (1M)
const GPT41: LLM = {
  modelId: "gpt-4.1",
  modelName: "GPT-4.1 (1M Context)",
  provider: "openai",
  hostedId: "gpt-4.1",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 1000000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 2, outputCost: 8 }
}

// GPT-4.1-mini
const GPT41Mini: LLM = {
  modelId: "gpt-4.1-mini",
  modelName: "GPT-4.1 Mini",
  provider: "openai",
  hostedId: "gpt-4.1-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 1000000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 0.4, outputCost: 1.6 }
}

// GPT-4.1-nano
const GPT41Nano: LLM = {
  modelId: "gpt-4.1-nano",
  modelName: "GPT-4.1 Nano",
  provider: "openai",
  hostedId: "gpt-4.1-nano",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 1000000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 0.1, outputCost: 0.4 }
}

// o3 — Reasoning model
const O3: LLM = {
  modelId: "o3",
  modelName: "o3",
  provider: "openai",
  hostedId: "o3",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 272000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 10, outputCost: 40 }
}

// o4-mini — Budget reasoning
const O4Mini: LLM = {
  modelId: "o4-mini",
  modelName: "o4-mini",
  provider: "openai",
  hostedId: "o4-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 272000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 1.1, outputCost: 4.4 }
}

// GPT-4o (legacy, still available)
const GPT4o: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4o (Legacy)",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 128000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 2.5, outputCost: 10 }
}

// GPT-4o-mini (legacy)
const GPT4oMini: LLM = {
  modelId: "gpt-4o-mini",
  modelName: "GPT-4o Mini (Legacy)",
  provider: "openai",
  hostedId: "gpt-4o-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  maxContext: 128000,
  pricing: { currency: "USD", unit: "1M tokens", inputCost: 0.15, outputCost: 0.6 }
}

export const OPENAI_LLM_LIST: LLM[] = [
  GPT54,
  GPT54Mini,
  GPT54Nano,
  GPT54Thinking,
  GPT51Codex,
  GPT41,
  GPT41Mini,
  GPT41Nano,
  O3,
  O4Mini,
  GPT54Pro,
  GPT4o,
  GPT4oMini
]
