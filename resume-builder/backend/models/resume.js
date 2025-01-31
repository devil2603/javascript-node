import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: String,
  contact: { email: String, phone: String, linkedIn: String },
  experience: [{ title: String, company: String, duration: String, details: String }],
  jobDescription: String,
  generatedText: String,
  isCached: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Resume", resumeSchema);
