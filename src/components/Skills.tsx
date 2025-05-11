import React from 'react';
import SectionHeading from './ui/SectionHeading';
import SkillItem from './ui/SkillItem';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'GraphQL', level: 70 },
    { name: 'Firebase', level: 75 },
  ];

  const otherSkills = [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'CI/CD', level: 75 },
    { name: 'Testing', level: 70 },
    { name: 'Agile/Scrum', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Skills & Expertise" subtitle="What I bring to the table" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Other Skills</h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;