import { useSpring } from 'react-spring';
import { useScroll } from 'react-use';

export const useParallax = (strength: number = 100) => {
  const { y } = useScroll();

  const [props] = useSpring(() => ({
    to: { transform: `translate3d(0, ${y * strength}px, 0)` },
    from: { transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  return props;
};