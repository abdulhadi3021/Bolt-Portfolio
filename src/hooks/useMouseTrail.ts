import { useState, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export const useMouseTrail = (numPoints: number = 20) => {
  const [points, setPoints] = useState<Point[]>([]);
  const [mousePos, setMousePos] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPoints(prevPoints => {
        const newPoints = [...prevPoints];
        newPoints.push({ ...mousePos });
        if (newPoints.length > numPoints) {
          newPoints.shift();
        }
        return newPoints;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [mousePos, numPoints]);

  return points;
};