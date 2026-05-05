import { useEffect, useRef, useState } from "react";

export const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.07 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial = {
    up:    { opacity: 0, transform: "translateY(60px)" },
    down:  { opacity: 0, transform: "translateY(-60px)" },
    left:  { opacity: 0, transform: "translateX(-70px)" },
    right: { opacity: 0, transform: "translateX(70px)" },
  }[direction] ?? { opacity: 0, transform: "translateY(60px)" };

  const style = visible
    ? {
        opacity: 1,
        transform: "translate(0)",
        transition: `opacity 0.85s cubic-bezier(.22,.68,0,1.2) ${delay}ms, transform 0.85s cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
      }
    : {
        ...initial,
        transition: `opacity 0.85s cubic-bezier(.22,.68,0,1.2) ${delay}ms, transform 0.85s cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
      };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};
