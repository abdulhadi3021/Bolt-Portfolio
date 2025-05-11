import React from 'react';
import { useMouseTrail } from '../../hooks/useMouseTrail';
import { animated, useSpring } from 'react-spring';

const MouseTrail: React.FC = () => {
  const points = useMouseTrail(20);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {points.map((point, index) => (
        <animated.div
          key={index}
          style={{
            position: 'absolute',
            left: point.x,
            top: point.y,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.05})`,
          }}
          className="w-2 h-2 bg-blue-400 rounded-full opacity-20"
        />
      ))}
    </div>
  );
};

export default MouseTrail;