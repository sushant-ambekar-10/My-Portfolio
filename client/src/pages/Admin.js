import { useState } from "react";

export default function ProjectInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    github: "",
    live: "",
    duration: "",
    skills: [""]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "skills") {
      const newSkills = [...formData.skills];
      newSkills[index] = value;
      setFormData({ ...formData, skills: newSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addSkillField = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

        try {
          const res = await fetch("http://localhost:5000/api/projects", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          const data = await res.json();
          console.log("Response:", data);
          alert("Project submitted successfully!");
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to submit project");
        }

  };

  return (
    <div className="min-h-screen bg-gradient-to-br   flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-600">Project Info</h2>

        <input
          type="text"
          name="name"
          placeholder="Project Title"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />

        <input
          type="text"
          name="github"
          placeholder="GitHub Link"
          value={formData.github}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="text"
          name="live"
          placeholder="Live Link"
          value={formData.live}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 2 weeks)"
          value={formData.duration}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />

        <div>
          <label className="font-semibold text-gray-700">Skills Used:</label>
          {formData.skills.map((skill, index) => (
            <input
              key={index}
              type="text"
              name="skills"
              value={skill}
              onChange={(e) => handleChange(e, index)}
              placeholder={`Skill ${index + 1}`}
              className="mt-2 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          ))}
          <button
            type="button"
            onClick={addSkillField}
            className="mt-2 text-sm text-purple-600 hover:underline"
          >
            + Add Skill
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-slate-700 to-gray-400 text-white py-2 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300"
          
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}