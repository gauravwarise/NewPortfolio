import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import type { Skill } from '../types';

export default function About() {
  const skills: Skill[] = [
    {
      category: 'Backend',
      items: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Websocket', 'Celery']
    },
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS']
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Kubernetes']
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'PWA']
    }
  ];

  const iconMap = {
    'Frontend': Code,
    'Backend': Server,
    'DevOps & Tools': Database,
    'Mobile': Smartphone
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Software developer with 2+ years of experience building scalable web applications. 
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              My Journey
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none">
              <p className="leading-relaxed">
                I discovered programming during my computer science studies and immediately fell in love with the 
                ability to create digital solutions that impact real users. Since then, I've worked on everything 
                from small startups to enterprise applications.
              </p>
              <p className="leading-relaxed">
                My approach combines technical expertise with creative problem-solving, always focusing on user 
                experience and performance. I believe the best code is not just functional, but also maintainable 
                and scalable.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full">
                <Globe className="w-5 h-5" />
                <span>Remote Ready</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full">
                <Palette className="w-5 h-5" />
                <span>UI/UX Focused</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-teal-600 p-6 rounded-2xl shadow-xl">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => {
              const IconComponent = iconMap[skill.category as keyof typeof iconMap];
              
              return (
                <div
                  key={skill.category}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skill.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}