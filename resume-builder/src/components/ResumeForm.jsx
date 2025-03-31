import { useState, useEffect } from "react";

export default function ResumeForm({ onFormChange, resumeData }) {
  const LOCAL_STORAGE_KEY = "resumeFormData";

  const getInitialData = () => {
    const savedForm = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedForm ? JSON.parse(savedForm) : resumeData;
  };

  const [form, setForm] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    onFormChange(updatedForm);
  };

  const handleArrayChange = (e, section, index) => {
    const { name, value } = e.target;
    const updatedSection = [...(form[section] || [])];
    updatedSection[index] = {
      ...updatedSection[index],
      [name]: value,
    };
    const updatedForm = { ...form, [section]: updatedSection };
    setForm(updatedForm);
    onFormChange(updatedForm);
  };

  const addArrayItem = (section, itemStructure) => {
    const updatedSection = [...(form[section] || []), itemStructure];
    const updatedForm = { ...form, [section]: updatedSection };
    setForm(updatedForm);
    onFormChange(updatedForm);
  };

  const removeArrayItem = (section, index) => {
    const updatedSection = [...(form[section] || [])];
    updatedSection.splice(index, 1);
    const updatedForm = { ...form, [section]: updatedSection };
    setForm(updatedForm);
    onFormChange(updatedForm);
  };

  const handleReset = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    const resetForm = resumeData;
    setForm(resetForm);
    onFormChange(resetForm);
    window.location.reload();
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 border border-gray-200 dark:border-gray-700 dark:text-gray-100 p-6 rounded shadow-md w-full md:w-1/2 overflow-y-auto h-screen resume-form md:ml-12">
      <h2 className="text-2xl font-bold mb-4 underline">Resume Form</h2>

      {/* Basic Info */}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      {/* Summary */}
      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={form.summary || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded resize-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      {/* Skills */}
      <textarea
        name="skills"
        placeholder="Skills (comma separated)"
        value={form.skills || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded resize-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      {/* Experience */}
      <textarea
        name="experience"
        placeholder="Experience"
        value={form.experience || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded resize-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      {/* Education Section */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        {(form.education || []).map((edu, index) => (
          <div key={index} className="mb-3 p-3 border rounded relative bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600">
            <button
              type="button"
              onClick={() => removeArrayItem("education", index)}
              className="absolute top-2 right-2 text-red-600 text-lg"
            >
              ✕
            </button>

            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={edu.degree || ""}
              onChange={(e) => handleArrayChange(e, "education", index)}
              className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              value={edu.institution || ""}
              onChange={(e) => handleArrayChange(e, "education", index)}
              className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <input
              type="text"
              name="year"
              placeholder="Year of Completion"
              value={edu.year || ""}
              onChange={(e) => handleArrayChange(e, "education", index)}
              className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem("education", { degree: "", institution: "", year: "" })}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
        >
          Add Education
        </button>
      </div>

      {/* Certifications Section */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Certifications</h3>
        {(form.certifications || []).map((cert, index) => (
          <div key={index} className="mb-3 p-3 border rounded relative bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600">
            <button
              type="button"
              onClick={() => removeArrayItem("certifications", index)}
              className="absolute top-2 right-2 text-red-600 text-lg"
            >
              ✕
            </button>

            <input
              type="text"
              name="title"
              placeholder="Certification Title"
              value={cert.title || ""}
              onChange={(e) => handleArrayChange(e, "certifications", index)}
              className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <input
              type="text"
              name="organization"
              placeholder="Issuing Organization"
              value={cert.organization || ""}
              onChange={(e) => handleArrayChange(e, "certifications", index)}
              className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem("certifications", { title: "", organization: "" })}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
        >
          Add Certification
        </button>
      </div>

      {/* Projects Section */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Projects</h3>
        {(form.projects || []).map((project, index) => (
          <div key={index} className="mb-3 p-3 border rounded relative bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600">
            <button
              type="button"
              onClick={() => removeArrayItem("projects", index)}
              className="absolute top-2 right-2 text-red-600 text-lg"
            >
              ✕
            </button>

            <input
              type="text"
              name="name"
              placeholder="Project Name"
              value={project.name || ""}
              onChange={(e) => handleArrayChange(e, "projects", index)}
              className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <textarea
              name="description"
              placeholder="Project Description"
              value={project.description || ""}
              onChange={(e) => handleArrayChange(e, "projects", index)}
              className="w-full p-2 mb-2 border rounded resize-none bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <input
              type="text"
              name="link"
              placeholder="Project Link (optional)"
              value={project.link || ""}
              onChange={(e) => handleArrayChange(e, "projects", index)}
              className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem("projects", { name: "", description: "", link: "" })}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
        >
          Add Project
        </button>
      </div>

      {/* Languages */}
      <textarea
        name="languages"
        placeholder="Languages (comma separated)"
        value={form.languages || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded resize-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      {/* Achievements */}
      <textarea
        name="achievements"
        placeholder="Achievements"
        value={form.achievements || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded resize-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      {/* Hobbies */}
      <textarea
        name="hobbies"
        placeholder="Hobbies"
        value={form.hobbies || ""}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded resize-none bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
      />

      {/* Reset button */}
      <button
        type="button"
        onClick={handleReset}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded mb-4"
      >
        Reset Form
      </button>
    </div>
  );
}
