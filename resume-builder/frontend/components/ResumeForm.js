import { useState } from "react";
import axios from "axios";

export default function ResumeForm() {
    const [formData, setFormData] = useState({ name: "", contact: "", experience: "", jobDescription: "" });
    const [resume, setResume] = useState("");

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const generateResume = async () => {
        const { data } = await axios.post("http://localhost:5000/api/resume/generate", formData);
        setResume(data.resume);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">AI Resume Builder</h1>
            <input className="border p-2 my-2 w-full" name="name" placeholder="Name" onChange={handleChange} />
            <input className="border p-2 my-2 w-full" name="contact" placeholder="Contact" onChange={handleChange} />
            <textarea className="border p-2 my-2 w-full" name="experience" placeholder="Experience" onChange={handleChange} />
            <textarea className="border p-2 my-2 w-full" name="jobDescription" placeholder="Job Description" onChange={handleChange} />
            <button onClick={generateResume} className="bg-blue-500 text-white p-2 w-full">Generate Resume</button>
            
            {resume && <pre className="border p-2 mt-4">{resume}</pre>}
        </div>
    );
}
