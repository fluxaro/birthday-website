import React, { useRef, useEffect } from 'react';
import { useResponsiveParticles } from '../hooks/useResponsiveParticles';

const ParticleCanvas = ({ rippleEffect = false }) => {
  const canvasRef = useRef(null);
  const particleCount = useResponsiveParticles();
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (rippleEffect && mouseRef.current.active) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.vx -= (dx / dist) * force * 0.5;
            this.vy -= (dy / dist) * force * 0.5;
          }
        }

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248, 209, 192, ${this.opacity})`;
        ctx.fill();
      }
    }

    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
      setTimeout(() => { mouseRef.current.active = false; }, 100);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      mouseRef.current = { x: touch.clientX, y: touch.clientY, active: true };
      setTimeout(() => { mouseRef.current.active = false; }, 100);
    };

    window.addEventListener('resize', handleResize);
    if (rippleEffect) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [particleCount, rippleEffect]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-10" />;
};

export default ParticleCanvas;
