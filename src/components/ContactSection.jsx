import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(`mailto:kimcarlorosita23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setFormData({ name: '', email: '', message: '' });
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
              <p className={`text-lg text-justify leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always excited to take on new projects and collaborate with amazing people.
                Whether you have a project in mind or just want to chat, feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" size={24} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>kimcarlorosita23@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-400" size={24} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>+63 9173971955</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-400" size={24} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Metro Manila, Philippines</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/kcrosita23" className={`transition-colors duration-300 ${
                isDark
                  ? 'text-gray-400 hover:text-blue-400'
                  : 'text-gray-500 hover:text-blue-600'
              }`}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kimcarlorosita/" className={`transition-colors duration-300 ${
                isDark
                  ? 'text-gray-400 hover:text-blue-400'
                  : 'text-gray-500 hover:text-blue-600'
              }`}>
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-white placeholder-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-white placeholder-gray-400"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-white placeholder-gray-400 resize-none"
                required
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;