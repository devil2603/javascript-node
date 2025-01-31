import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateResume(name, contact, experience, jobDescription) {
    try {
        const prompt = `Create an ATS-friendly resume for:
        Name: ${name}
        Contact: ${contact}
        Experience: ${experience}
        Tailored for this job description: ${jobDescription}`;

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "system", content: prompt }],
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("AI API Error:", error.message);
        throw new Error("AI processing failed.");
    }
}
