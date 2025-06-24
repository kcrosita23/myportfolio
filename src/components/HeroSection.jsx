import React from "react";
import DP from "../assets/profile-pic.png";

const HeroSection = ({ isDark, scrollY, scrollToSection }) => {
  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? "" : "bg-gradient-to-br from-blue-50 to-purple-50"
      }`}
    >
      <div
        className={`absolute inset-0 animate-pulse ${
          isDark
            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20"
            : "bg-gradient-to-r from-blue-300/30 to-purple-300/30"
        }`}
      ></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className="transform transition-all duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY / 800),
          }}
        >
          <div className="">
            <img
              src={DP}
              alt="Hero Image"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full shadow-lg"
            />
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6
                        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
          >
            Hi I'm Kim Carlo!
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Full Stack Web Developer & System Engineer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full
                      hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-3 border-2 rounded-full transition-all duration-300 transform hover:scale-105 text-white ${
                isDark
                  ? "border-blue-500 hover:bg-blue-500"
                  : "border-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
