import React from 'react';

const ExperienceSection = ({ isDark, experiences }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          EXPERIENCE
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              {index !== experiences.length - 1 && (
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}
              <div className={`backdrop-blur-sm rounded-lg p-6 ml-4 transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10'
                  : 'bg-gray-100/50 hover:bg-gray-200/50 border border-gray-200'
              }`}>
                <h3 className="text-xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                <p className={`font-medium mb-2 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`}>{exp.company}</p>
                <p className={`text-sm mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>{exp.period}</p>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;