import React from 'react';

const AboutSection = ({ isDark, skills }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          ABOUT ME
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg text-justify leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a passionate full-stack developer with over 2 years of experience creating
              digital solutions that make a difference. I specialize in modern web technologies
              and love bringing creative ideas to life through code.
            </p>
            <p className={`text-lg text-justify leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className={`backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10'
                  : 'bg-gray-100/50 hover:bg-gray-200/50 border border-gray-200'
              }`}>
                <skill.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className={`w-full rounded-full h-2 ${
                  isDark ? 'bg-gray-700' : 'bg-gray-300'
                }`}>
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;