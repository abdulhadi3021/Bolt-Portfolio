import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Work Experience" subtitle="My professional journey" />

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex md:justify-end">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-md transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-4">
                        <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg mr-4">
                        <MapPin size={16} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{experience.company}, {experience.location}</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg mr-4">
                        <Calendar size={16} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{experience.duration}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 z-10"></div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;