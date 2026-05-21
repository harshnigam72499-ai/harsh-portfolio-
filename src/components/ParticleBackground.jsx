import { useMemo } from "react";

export default function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 2 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_30%)]" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />

      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
