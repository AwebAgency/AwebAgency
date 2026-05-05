import { useEffect, useRef, useState } from "react";

export const useReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

// Helper : retourne les styles inline pour une animation de reveal
export const rs = (visible, { delay = 0, dir = "up", dist = 36 } = {}) => {
  const t = {
    up:    `translateY(${dist}px)`,
    down:  `translateY(-${dist}px)`,
    left:  `translateX(-${dist}px)`,
    right: `translateX(${dist}px)`,
  };
  return {
    opacity:   visible ? 1 : 0,
    transform: visible ? "translate(0)" : (t[dir] ?? t.up),
    transition: `opacity 0.75s ease ${delay}ms, transform 0.75s cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
  };
};
