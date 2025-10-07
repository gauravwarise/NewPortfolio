import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import type { Project } from '../types';

import rmsImg from '../assets/img/rms.jpg'
import strategy from '../assets/img/strategy.jpg'
import webterminal from '../assets/img/webterminal.jpg'
import portfolio from '../assets/img/portfolio.jpg'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Risk Management System',
      description: 'Risk Management System – A real-time trading risk monitoring platform built with React, Django, Python, PostgreSQL, and WebSockets on Linux, enabling live position tracking, automated risk rule enforcement, and portfolio exposure analytics for traders and institutions.',
      technologies: ['React', 'django', 'Python', 'PostgreSQL', 'MySQL', 'WebSocket', 'django channels', 'Linux'],
      image: rmsImg,
      // github: 'https://github.com',
      demo: 'http://alphatrade.fortiddns.com:3000/',
      featured: true
    },
    {
      id: '2',
      title: 'Trading Strategies',
      description: 'Trading Strategies – Developed and backtested algorithmic trading strategies using Python, Pandas, and NumPy, with real-time execution and data streaming through the Deribit FIX API and ZMQ for low-latency communication.',
      technologies: ['Python', 'Deribit Fix API', 'ZMQ', 'Pandas', 'Numpy', 'Redis'],
      image: strategy,
      // github: 'https://github.com',
      // demo: 'https://example.com',
      featured: true
    },
    {
      id: '3',
      title: 'CFDUP Webterminal',
      description: 'CFDUP Webterminal – A web-based trading terminal for CFDUP, built with React frontend and Django/FastAPI backend, leveraging PostgreSQL, Redis, WebSockets, and Django Channels for real-time market data, order execution, and user portfolio management.',
      technologies: ['React', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'WebSocket', 'django channels','Redis'],
      image: webterminal,
      github: 'https://github.com',
      demo:'https://www.cfdup.com/',
      featured: true
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'Portfolio Website – A responsive personal portfolio built with React, showcasing projects, skills, and experience with a modern UI and smooth navigation.',
      technologies: ['React', 'TypeScript'],
      image: portfolio,
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false
    },
    {
      id: '5',
      title: 'AI Content Generator',
      description: 'Machine learning-powered tool for generating marketing content with natural language processing and template customization.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
      image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      featured: false
    },
    {
      id: '6',
      title: 'Blockchain Voting System',
      description: 'Secure voting platform using blockchain technology for transparency and immutability. Features voter verification and real-time results.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false
    }
  ];

  const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies)));
  const filters = ['all', ...allTechnologies];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mr-4">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}