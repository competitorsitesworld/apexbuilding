import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getConstructionAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I can't connect to the server right now. Please contact our office directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are 'ApexBot', a helpful, professional, and knowledgeable AI consultant for ApexBuild, a high-end construction agency. 
        Your goal is to answer preliminary questions about construction processes, estimated timelines for common projects (kitchen remodels, new builds, flooring), and materials.
        
        Guidelines:
        1. Keep answers concise (under 3 sentences where possible) and professional.
        2. If asked about prices, provide very rough ranges but ALWAYS emphasize that a formal quote is needed.
        3. Be encouraging and helpful.
        4. End your advice by suggesting they use the form below to book a free consultation.
        
        Do not make binding promises or give exact legal/engineering advice.`,
        temperature: 0.7,
      }
    });
    
    return response.text || "I apologize, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble thinking right now. Please reach out to our team directly.";
  }
};