"use client";

import { useEffect, useRef } from "react";


export default function CyberGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let mouseX = -999;
  let mouseY = -999;
  let time = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const spacing = 40;
    let animationFrameId: number;

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 60;
          const wave = Math.sin((x + y + time) * 0.05) * 0.03;
          const baseOpacity = Math.max(0.003, 1 - dist / maxDist);
          const opacity = Math.min(0.25, baseOpacity + wave);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity.toFixed(3)})`;
          ctx.strokeRect(x, y, spacing, spacing);
        }
      }
      time += 1;
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      if (
        x >= bounds.left &&
        x <= bounds.right &&
        y >= bounds.top &&
        y <= bounds.bottom
      ) {
        mouseX = x - bounds.left;
        mouseY = y - bounds.top;
      } else {
        mouseX = -999;
        mouseY = -999;
      }
    };

    const handleMouseLeave = () => {
      mouseX = -999;
      mouseY = -999;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    drawGrid();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
