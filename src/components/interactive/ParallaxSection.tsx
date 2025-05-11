import React from 'react';
import { animated } from 'react-spring';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  strength?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, strength = 50 }) => {
  const props = useParallax(strength);

  return (
    <animated.div style={props} className="relative">
      {children}
    </animated.div>
  );
};

export default ParallaxSection;