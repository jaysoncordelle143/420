'use client';

import { useEffect } from 'react';

export default function CannabisCursor() {
  useEffect(() => {
    // Only run on desktop devices (devices with a precise pointer like a mouse)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.id = 'cannabis-cursor';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Mouse state with spring physics
    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };
    const trail: any[] = [];
    const numDots = 18;

    // Initialize trail
    for (let i = 0; i < numDots; i++) {
      trail.push({
        x: mouse.x,
        y: mouse.y,
        vx: 0,
        vy: 0,
        opacity: 0,
        rotation: Math.random() * Math.PI * 2,
        r: 0
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse movement (lerp)
      mouse.x += (mouse.tx - mouse.x) * 0.15;
      mouse.y += (mouse.ty - mouse.y) * 0.15;

      trail.forEach((dot, i) => {
        if (i === 0) {
          dot.x = mouse.x;
          dot.y = mouse.y;
          dot.opacity = 1;
          dot.r = 28; // Base size of the leaf
        } else {
          const prev = trail[i - 1];
          
          // Spring physics from your original code
          dot.vx += (prev.x - dot.x) * 0.35;
          dot.vx *= 0.4; // Friction
          
          dot.vy += (prev.y - dot.y) * 0.35;
          dot.vy *= 0.4; // Friction
          dot.vy += 0.8; // Slight gravity when mouse stops

          dot.x += dot.vx;
          dot.y += dot.vy;

          // Fade out and shrink towards the end of the tail
          dot.opacity = Math.max(0, 1 - i / numDots);
          dot.r = 28 * (1 - i / numDots);
          dot.rotation += 0.08; // Gentle spinning
        }

        // Draw the glowing cannabis leaf
        if (dot.opacity > 0.01) {
          ctx.save();
          ctx.translate(dot.x, dot.y);
          ctx.rotate(dot.rotation);
          ctx.globalAlpha = dot.opacity * 0.9;
          
          // Add a magical green glow
          ctx.shadowColor = '#4ade80';
          ctx.shadowBlur = 15;
          
          ctx.font = `${dot.r}px serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('🌿', 0, 0);
          
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  return null;
}
