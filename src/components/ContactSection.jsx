"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactSection = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous status
    setStatus({ type: "", message: "" });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_email: "kimcarlo23.dev@gmail.com", // Your email
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_qrkl4es", // Replace with your EmailJS service ID
        "template_n65re2m", // Replace with your EmailJS template ID
        templateParams,
        "jHhbzEOOwu4UuZxfF" // Replace with your EmailJS public key
      );

      setStatus({
        type: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's work together!</h3>
              <p
                className={`text-lg text-justify leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm always excited to take on new projects and collaborate with
                amazing people. Whether you have a project in mind or just want
                to chat, feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" size={24} />
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  kimcarlo23.dev@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-400" size={24} />
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  +63 9173971955
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-400" size={24} />
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  Metro Manila, Philippines
                </span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/kcrosita23"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  isDark
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kimcarlorosita/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  isDark
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {status.type === "success" && (
                <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="text-green-500" size={20} />
                  <p className="text-green-500 font-medium">{status.message}</p>
                </div>
              )}

              {/* Error Message */}
              {status.type === "error" && (
                <div className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-red-500 font-medium">{status.message}</p>
                </div>
              )}

              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-white placeholder-gray-400 ${
                    errors.name
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/10"
                  }`}
                  disabled={isLoading}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-white placeholder-gray-400 ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/10"
                  }`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-white placeholder-gray-400 resize-none ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/10"
                  }`}
                  disabled={isLoading}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <p
              className={`text-sm text-center ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              * Required fields
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
