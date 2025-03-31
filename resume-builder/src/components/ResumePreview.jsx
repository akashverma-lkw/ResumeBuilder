import React, { forwardRef } from "react";

const ResumePreview = forwardRef(({ resumeData }, ref) => {
  const {
    name,
    email,
    phone,
    address,
    summary,
    skills,
    experience,
    education = [],
    certifications = [],
    projects = [],
    languages,
    achievements,
    hobbies,
  } = resumeData;

  return (
    <div
      ref={ref}
      className="bg-white dark:bg-gray-900 p-8 rounded shadow-lg w-full md:w-[80%] h-screen overflow-y-auto border border-gray-200 dark:border-gray-700 md:ml-24 resume-form text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <h2 className="text-2xl font-bold mb-2 underline">Resume Preview</h2>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{name || "Full Name"}</h2>
        <p className="text-gray-500 dark:text-gray-400">{email || "Email"} | {phone || "Phone"}</p>
        <p className="text-gray-500 dark:text-gray-400">{address || "Address"}</p>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 dark:border-gray-600 mb-6" />

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Professional Summary</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">{summary}</p>
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.split(",").map((skill, idx) => (
              <li
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-full border border-gray-300 dark:border-gray-600"
              >
                {skill.trim()}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {experience && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Experience</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">{experience}</p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Education</h3>
          <ul className="space-y-4">
            {education.map((edu, idx) => (
              <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                <p className="font-medium text-base">{edu.degree || "Degree"}</p>
                <p>{edu.institution || "Institution"}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{edu.year || "Year"}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Certifications</h3>
          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                <p className="font-medium text-base">{cert.title || "Certification Title"}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{cert.organization || "Organization"}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Projects</h3>
          <ul className="space-y-4">
            {projects.map((project, idx) => (
              <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                <p className="font-medium text-base">{project.name || "Project Name"}</p>
                <p className="whitespace-pre-line text-sm">{project.description || "Project Description"}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline text-sm"
                  >
                    {project.link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {languages && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Languages</h3>
          <ul className="flex flex-wrap gap-2">
            {languages.split(",").map((lang, idx) => (
              <li
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-full border border-gray-300 dark:border-gray-600"
              >
                {lang.trim()}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Achievements */}
      {achievements && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Achievements</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">{achievements}</p>
        </section>
      )}

      {/* Hobbies */}
      {hobbies && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Hobbies</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">{hobbies}</p>
        </section>
      )}
    </div>
  );
});

export default ResumePreview;
