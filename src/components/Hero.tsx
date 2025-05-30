import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout | null = null;
    
    const startAnimation = () => {
      let iteration = 0;
      const originalText = "Abdulhadi";
      
      clearInterval(interval as NodeJS.Timeout);
      
      interval = setInterval(() => {
        if (titleRef.current) {
          titleRef.current.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          
          if (iteration >= originalText.length) {
            clearInterval(interval as NodeJS.Timeout);
          }
          
          iteration += 1 / 3;
        }
      }, 30);
    };

    startAnimation();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-green-100 dark:bg-green-900/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl w-full mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.p 
          className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wider"
          variants={itemVariants}
        >
          FULL-STACK WEB DEVELOPER
        </motion.p>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          Hello, I'm <span ref={titleRef} className="text-blue-600 dark:text-blue-400">Abdulhadi</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          I craft elegant, user-centric web experiences with modern technologies
          and a passion for creating impactful digital solutions.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6"
          variants={itemVariants}
        >
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            whileHover={{ y: -3 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            whileHover={{ y: -3 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            whileHover={{ y: -3 }}
          >
            <Twitter size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
