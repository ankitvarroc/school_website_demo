"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  by?: "character" | "word";
}

export default function SplitText({
  text,
  className = "",
  delay = 0.05,
  duration = 0.5,
  by = "character",
}: SplitTextProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const words = text.split(" ");

  return (
    <motion.span
      className={`d-inline-flex flex-wrap justify-content-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {by === "word" ? (
        words.map((word, idx) => (
          <motion.span
            key={`word-${idx}`}
            variants={itemVariants}
            style={{
              display: "inline-block",
              marginRight: idx < words.length - 1 ? "0.3em" : "0",
            }}
          >
            {word}
          </motion.span>
        ))
      ) : (
        words.map((word, wIdx) => (
          <span
            key={`word-${wIdx}`}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              marginRight: wIdx < words.length - 1 ? "0.3em" : "0",
            }}
          >
            {word.split("").map((char, cIdx) => (
              <motion.span
                key={`char-${wIdx}-${cIdx}`}
                variants={itemVariants}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))
      )}
    </motion.span>
  );
}
