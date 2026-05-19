import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 05/19/26) -----------------------------

// GPT-4.1 (UPDATED 04/14/25)
const GPT41: LLM = {
  modelId: "gpt-4.1",
  modelName: "GPT-4.1",
  provider: "openai",
  hostedId: "gpt-4.1",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2,
    outputCost: 8
  }
}

// GPT-4.1 mini (UPDATED 04/14/25)
const GPT41Mini: LLM = {
  modelId: "gpt-4.1-mini",
  modelName: "GPT-4.1 Mini",
  provider: "openai",
  hostedId: "gpt-4.1-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.4,
    outputCost: 1.6
  }
}

// GPT-4.1 nano (UPDATED 04/14/25)
const GPT41Nano: LLM = {
  modelId: "gpt-4.1-nano",
  modelName: "GPT-4.1 Nano",
  provider: "openai",
  hostedId: "gpt-4.1-nano",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.1,
    outputCost: 0.4
  }
}

// o3 (UPDATED 04/16/25)
const O3: LLM = {
  modelId: "o3",
  modelName: "o3",
  provider: "openai",
  hostedId: "o3",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10,
    outputCost: 40
  }
}

// o3-mini (UPDATED 01/31/25)
const O3Mini: LLM = {
  modelId: "o3-mini",
  modelName: "o3-mini",
  provider: "openai",
  hostedId: "o3-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

// o4-mini (UPDATED 04/16/25)
const O4Mini: LLM = {
  modelId: "o4-mini",
  modelName: "o4-mini",
  provider: "openai",
  hostedId: "o4-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

// GPT-4o (UPDATED 05/13/24)
const GPT4o: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4o",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10
  }
}

// GPT-4o mini (UPDATED 07/18/24)
const GPT4oMini: LLM = {
  modelId: "gpt-4o-mini",
  modelName: "GPT-4o Mini",
  provider: "openai",
  hostedId: "gpt-4o-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

export const OPENAI_LLM_LIST: LLM[] = [
  GPT41,
  GPT41Mini,
  GPT41Nano,
  O3,
  O3Mini,
  O4Mini,
  GPT4o,
  GPT4oMini
]
