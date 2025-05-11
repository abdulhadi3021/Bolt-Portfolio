import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-100 dark:border-blue-900 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Abdulhadi</h2>
        <p className="text-gray-600 dark:text-gray-400">Loading amazing stuff...</p>
      </div>
    </div>
  );
};

export default Loader;