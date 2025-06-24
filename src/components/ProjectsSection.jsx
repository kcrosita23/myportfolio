import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectsSection = ({ isDark, projects }) => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-gray-100/50 hover:bg-gray-200/50 border border-gray-200"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  className={`flex items-center transition-colors duration-300 ${
                    isDark
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-500"
                  }`}
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
