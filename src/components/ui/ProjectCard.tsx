import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>
        <div className={`absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-100'}`}>
          <span className="text-xs font-medium bg-blue-600 px-2 py-1 rounded-full w-fit mb-2">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className={`text-sm text-gray-200 mb-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-800/50 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className={`flex gap-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm flex items-center transition-colors duration-300"
            >
              <ExternalLink size={16} className="mr-1" /> Live Demo
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm flex items-center transition-colors duration-300"
            >
              <Github size={16} className="mr-1" /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;