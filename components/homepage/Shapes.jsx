"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Shapes({variants}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 3 + Math.random() * 2,
    }));

    let pulse = 0;
    let pulseIncreasing = true;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pulse animation value between 0.3 and 1
      pulse += pulseIncreasing ? 0.02 : -0.02;
      if (pulse > 1) pulseIncreasing = false;
      if (pulse < 0.3) pulseIncreasing = true;

      // Draw connections
      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i === j) return;
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + pulse * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, index) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + (index % 5 === 0 ? pulse * 0.4 : 0)})`;
        ctx.shadowColor = "#00ff99";
        ctx.shadowBlur = index % 5 === 0 ? 12 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <motion.div
      className="absolute md:right-0  md:top-0 h-full md:w-3/5 w-full   mt-20 md:mt-10"
     initial="hidden" 
     animate="show"
     variants={variants}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
