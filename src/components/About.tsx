import React from 'react';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-lg transform -rotate-6 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-green-100 dark:bg-green-900/20 rounded-lg transform rotate-6 z-0"></div>
            <div className="relative z-10 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://ik.imagekit.io/123e/me3__1_-removebg-preview.png?updatedAt=1748180684807" 
                alt="Abdulhadi" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Full-Stack Web Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Abdulhadi, a passionate full-stack web developer with 5+ years of experience 
              creating beautiful, functional, and user-centered digital experiences. With a 
              background in both design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user interfaces. 
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that not only meet but exceed client expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full mr-4">
                  <Code size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Building modern web applications</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-green-50 dark:bg-green-900/20 rounded-full mr-4">
                  <Briefcase size={20} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">5+ years in web development</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-full mr-4">
                  <GraduationCap size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Computer Science degree</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-full mr-4">
                  <Award size={20} className="text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Certified</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AWS & Google Cloud certified</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
