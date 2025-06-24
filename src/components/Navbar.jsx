import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({
  isDark,
  setIsDark,
  isMenuOpen,
  setIsMenuOpen,
  scrollY,
  navItems,
  scrollToSection,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? isDark
            ? "bg-black/80 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent
                cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={` text-white transition-colors duration-300 relative group ${
                  isDark ? "hover:text-blue-400" : "hover:text-blue-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isDark ? "bg-blue-400" : "bg-blue-600"
                  }`}
                ></span>
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4 hover:text-blue-600">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDark ? "hover:bg-white/10" : "hover:bg-gray-200"
              }`}
            >
              {isDark ? (
                <Sun size={20} className="hover:text-blue-600" />
              ) : (
                <Moon size={20} className="text-white hover:text-blue-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
                isDark ? "hover:bg-white/10" : "hover:bg-gray-200"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen
            ? isDark
              ? "max-h-64 bg-black/90 backdrop-blur-md"
              : "max-h-64 bg-white/90 backdrop-blur-md shadow-lg"
            : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left hover:text-blue-400 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
