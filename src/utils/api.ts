import { GoogleGenAI } from "@google/genai";
import config from "../config";
import { generatePrompt } from "./prompt";
import { ModelResponse } from "../types";

export const queryLLM = async (code: string): Promise<ModelResponse | null> => {
  const AI = new GoogleGenAI({ apiKey: config.API_KEY });
  const response = await AI.models.generateContent({
    model: config.MODEL_NAME,
    contents: generatePrompt(code),
  });

  const output = response.text;
  if (output) {
    return JSON.parse(output.replace(/^```json\n|```$/g, ""));
  }

  return null;
};
