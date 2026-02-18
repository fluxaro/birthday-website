import { useEffect, useRef } from 'react';

export const RippleLayer = () => {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleInteraction = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 150,
        opacity: 0.3,
      });
    };

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += 2;
        ripple.opacity -= 0.01;

        if (ripple.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(231, 184, 201, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        return true;
      });
    };

    frameRef.current = requestAnimationFrame(animate);

    canvas.addEventListener('click', handleInteraction);
    canvas.addEventListener('touchstart', handleInteraction);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      canvas.removeEventListener('click', handleInteraction);
      canvas.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};
