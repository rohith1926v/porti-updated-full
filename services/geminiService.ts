import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

const SYSTEM_PROMPT = `
You are RV_OS, an advanced AI terminal assistant for Rohith Virlanki's portfolio website.
Your personality is "Cyberpunk Utility", efficient, tech-savvy, and slightly robotic but helpful.

STYLE GUIDELINES:
- Use technical terminology where appropriate.
- Be concise. Avoid long paragraphs. Use bullet points if necessary.
- Refer to Rohith as "The Subject" or "The Developer".
- If you don't know something, state "DATA_NOT_AVAILABLE" rather than "I don't know".

CONTEXT DATABASE:
${JSON.stringify(RESUME_DATA)}
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "SYSTEM_ERROR: API_KEY_MISSING. CONNECTION_REFUSED. PLEASE_CONTACT_ADMIN.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    return response.text || "NULL_RESPONSE_RECEIVED";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "CRITICAL_FAILURE: NETWORK_INTERRUPTION_DETECTED.";
  }
};