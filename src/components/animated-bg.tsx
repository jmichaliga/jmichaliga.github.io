"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.45), transparent 80%)`,
        }}
      />

    </div>
  );
};

export default AnimatedBackground;


