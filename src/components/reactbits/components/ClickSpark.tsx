"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface ClickSparkProps {
  sparkColor?: string | string[];
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "ease-out" | "linear" | "ease-in" | "ease-in-out";
  extraScale?: number;
  isGlobal?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
  color: string;
}

export default function ClickSpark({
  sparkColor = ["#d4af37", "#fbbf24", "#f59e0b", "#ffffff"],
  sparkSize = 12,
  sparkRadius = 24,
  sparkCount = 8,
  duration = 450,
  easing = "ease-out",
  extraScale = 1.0,
  isGlobal = false,
  className = "",
  style = {},
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animFrameRef = useRef<number | null>(null);

  // Easing calculation function
  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        case "ease-out":
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  // Resize canvas to match container or viewport
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (isGlobal) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    } else {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    }

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);
    }
  }, [isGlobal]);

  useEffect(() => {
    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);

    let resizeObserver: ResizeObserver | null = null;
    if (!isGlobal && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateCanvasDimensions();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [isGlobal, updateCanvasDimensions]);

  const animateRef = useRef<() => void>(() => {});

  // Animation render loop
  useEffect(() => {
    animateRef.current = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const now = performance.now();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = now - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.save();
        ctx.strokeStyle = spark.color;
        ctx.lineWidth = Math.max(1.5, 2.5 * (1 - progress));
        ctx.lineCap = "round";
        ctx.globalAlpha = Math.max(0, 1 - progress);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();

        return true;
      });

      if (sparksRef.current.length > 0) {
        animFrameRef.current = requestAnimationFrame(animateRef.current);
      } else {
        animFrameRef.current = null;
      }
    };
  }, [duration, easeFunc, extraScale, sparkRadius, sparkSize]);

  // Click handler to spawn sparks
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x = e.clientX;
    let y = e.clientY;

    if (!isGlobal) {
      const rect = canvas.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    const now = performance.now();
    const colors = Array.isArray(sparkColor) ? sparkColor : [sparkColor];

    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => {
      const baseAngle = (i * 2 * Math.PI) / sparkCount;
      const jitter = (Math.random() - 0.5) * 0.2;
      const chosenColor = colors[Math.floor(Math.random() * colors.length)];
      return {
        x,
        y,
        angle: baseAngle + jitter,
        startTime: now,
        color: chosenColor,
      };
    });

    sparksRef.current.push(...newSparks);

    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(animateRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className={`click-spark-wrapper ${className}`}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100%",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: isGlobal ? "fixed" : "absolute",
          top: 0,
          left: 0,
          width: isGlobal ? "100vw" : "100%",
          height: isGlobal ? "100vh" : "100%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      {children}
    </div>
  );
}
