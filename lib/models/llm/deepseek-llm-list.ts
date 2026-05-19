import { LLM } from "@/types"

const DEEPSEEK_PLATFORM_LINK = "https://platform.deepseek.com/"

// DeepSeek Models (UPDATED 05/19/26) -----------------------------

// DeepSeek R1 (UPDATED 01/20/25)
const DEEPSEEK_R1: LLM = {
  modelId: "deepseek-reasoner",
  modelName: "DeepSeek R1",
  provider: "deepseek",
  hostedId: "deepseek-reasoner",
  platformLink: DEEPSEEK_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.55,
    outputCost: 2.19
  }
}

// DeepSeek V3 (UPDATED 12/26/24)
const DEEPSEEK_V3: LLM = {
  modelId: "deepseek-chat",
  modelName: "DeepSeek V3",
  provider: "deepseek",
  hostedId: "deepseek-chat",
  platformLink: DEEPSEEK_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.27,
    outputCost: 1.1
  }
}

export const DEEPSEEK_LLM_LIST: LLM[] = [
  DEEPSEEK_R1,
  DEEPSEEK_V3
]
