"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
}

export default function BlurText({
  text,
  delay = 0.08,
  className = "",
  animateBy = "words",
  direction = "top",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const yOffset = direction === "top" ? -18 : 18;

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: yOffset,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.span
      className={`d-inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {elements.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          variants={child}
          style={{
            display: "inline-block",
            whiteSpace: item === " " ? "pre" : "normal",
            marginRight: animateBy === "words" ? "0.3em" : "0",
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
