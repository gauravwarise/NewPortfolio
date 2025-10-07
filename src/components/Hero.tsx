import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import ProfileImg from "../assets/img/myimage.jpeg"
import Resume from "../assets/data/Resume.pdf"

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gauravwarise04@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
  <img
    src={ProfileImg}
    alt="Gaurav Warise"
    className="w-32 h-32 object-cover shadow-xl ring-4 ring-white dark:ring-gray-800 scale-150"
  />
  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
  </div>
</div>

          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 bg-clip-text text-transparent">
              Gaurav Warise
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light">
            Software Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            I transform ideas into beautiful, functional applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
            </button>
            
            <a
              href={Resume}
              download
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}