import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPowerDevice = navigator.deviceMemory && navigator.deviceMemory <= 4;
    const particleCount = lowPowerDevice ? 26 : 42;
    const particles = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    let isPaused = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0.7 + Math.random() * 1.8,
          speed: reduceMotion ? 0 : 0.1 + Math.random() * 0.22,
          alpha: 0.22 + Math.random() * 0.45,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < -8) {
          particle.y = height + 8;
          particle.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 231, 255, ${particle.alpha})`;
        ctx.fill();
      });

      if (!reduceMotion && !isPaused) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    createParticles();
    draw();
    const handleResize = () => {
      window.cancelAnimationFrame(frameId);
      resize();
      createParticles();
      draw();
    };

    const handleVisibility = () => {
      isPaused = document.hidden;
      window.cancelAnimationFrame(frameId);
      if (!isPaused && !reduceMotion) {
        draw();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_86%_78%,rgba(168,85,247,0.14),transparent_30%),linear-gradient(135deg,#050816,#07111f_52%,#0a0818)]" />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
      />
    </div>
  );
}
