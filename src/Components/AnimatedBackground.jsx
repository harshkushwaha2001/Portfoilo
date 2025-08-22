import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const circles = Array.from({ length: 10 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-300/20"
          style={{
            width: Math.random() * 150 + 50,
            height: Math.random() * 150 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
