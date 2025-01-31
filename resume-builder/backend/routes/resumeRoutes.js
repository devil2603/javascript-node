import express from "express";
import { generateResume } from "../services/aiService.js";

const router = express.Router();

router.post("/generate", async (req, res) => {
    const { name, contact, experience, jobDescription } = req.body;
    if (!name || !contact || !experience || !jobDescription) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const resumeText = await generateResume(name, contact, experience, jobDescription);
    res.json({ resume: resumeText });
});

export default router;
