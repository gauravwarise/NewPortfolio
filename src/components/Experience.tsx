import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import type { Experience } from '../types';

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Software Developer',
      company: 'SGFX',
      location: 'Dubai',
      startDate: 'Sep 2025',
      endDate: 'Current',
      description: [
        'Lead development of scalable and secure features for core ',
        'enterprise applications. Architected real-time data streaming',
        'solutions using WebSockets and event-driven microservices. ',
        'Mentored junior developers and conducted code reviews to ensure',
        'code quality and best practices. Spearheaded CI/CD pipeline ',
        'improvements, reducing deployment times by 30%.Oversaw cloud ',
        'infrastructure performance, applying auto-scaling and cost ',
        'optimization strategies.'
      ],
      technologies: ['Python', 'Django', 'Django Channels', 'Django Rest Framework', 'Celery', 'React.js', 'Redux', 'WebSocket', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'Git & GitHub', 'CI/CD', 'JWT', 'Tailwind CSS', 'Microservices Architecture', 'Cloud Infrastructure', 'REST APIs']
    },
    {
      id: '2',
      title: 'Software Developer',
      company: 'Finrise Softech Pvt Ltd',
      location: 'Mumbai, India',
      startDate: 'Aug 2023',
      endDate: 'Sept 2025',
      description: [
        'Developed new product features for company platforms, focusing',
        'on performance and scalability. Implemented latest security ',
        'patches and ensured compliance with industry standards. Enhanced ',
        'WebSocket-based real-time streaming performance. Managed source ',
        'code using Git and GitHub, ensuring smooth collaboration and ',
        'version control. Built CI/CD pipelines for continuous integration ',
        'and deployment.',
      ],
      technologies: ['Python', 'Django Rest Framework', 'Websocket', 'Celery', 'React', 'MySQL', 'PostgreSQL', 'Redis', 'Linux', 'Docker', 'Git & GitHub']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey building innovative solutions and leading development teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transform md:-translate-x-1/2 shadow-lg"></div>

                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="ml-16 md:ml-0">
                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}