import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 100, delay = 0 }: TypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const startTyping = useCallback(() => {
    let currentIndex = 0;
    setIsTyping(true);

    const typeChar = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeChar, speed);
      } else {
        setIsTyping(false);
      }
    };

    setTimeout(typeChar, delay);
  }, [text, speed, delay]);

  useEffect(() => {
    startTyping();
  }, [startTyping]);

  return { displayText, isTyping, restart: startTyping };
};