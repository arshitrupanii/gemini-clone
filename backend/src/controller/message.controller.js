import { GoogleGenAI } from "@google/genai";
import Message from "../schema/messages.schema.js";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

if(!process.env.GEMINI_API_KEY){
    console.log("api key not found");
}

const generateResponse = async(req, res) => {
    try {
        const userid = req.body
        console.log(userid)
        const prompt = req.body.prompt;
                
        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: prompt,
            systemInstruction:`response must be in organize in paragraph headline and add emoji if needed`
            
        });

        const saveResponse = new Message({prompt,response:response.text});
        await saveResponse.save()

        res.send({ response: response.text });
        
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).send({ error: `Failed to generate ${error}` });    
    }
}

export default generateResponse;