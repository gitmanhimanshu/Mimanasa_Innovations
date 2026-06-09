"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

/** Fade + rise on scroll into view. */
export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Count-up number that triggers on view. */
export function Counter({ to = 0, suffix = "", decimals = 0, duration = 1.8, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return controls.stop;
  }, [inView, to, mv, duration]);

  const fmt = (n) => {
    if (to >= 1000) return Math.round(n).toLocaleString("en-US");
    return decimals ? n.toFixed(decimals) : Math.round(n).toString();
  };

  return (
    <span ref={ref} className={className}>
      {fmt(val)}
      {suffix}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h-section mt-4">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </Reveal>
  );
}

export function Pill({ children, className = "" }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}
