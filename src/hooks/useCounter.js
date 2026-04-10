import { useState, useEffect, useRef } from 'react';

export default function useCounter(target, ref) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cancelAnimationFrame(rafRef.current);
        setCount(0);
        const duration = 1500;
        const start = performance.now();
        const frame = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * target));
          if (progress < 1) rafRef.current = requestAnimationFrame(frame);
          else setCount(target);
        };
        rafRef.current = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(rafRef.current);
        setCount(0);
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [target, ref]);

  return count;
}
