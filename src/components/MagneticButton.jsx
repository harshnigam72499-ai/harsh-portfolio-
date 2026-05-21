import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
  onClick,
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 6;
    const moveY = (y - centerY) / 6;

    el.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    el.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <button
      ref={ref}
      onClick={onClick}   // 🔥 THIS WAS MISSING (MAIN FIX)
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </button>
  );
}
