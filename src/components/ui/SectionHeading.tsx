import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center">
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;