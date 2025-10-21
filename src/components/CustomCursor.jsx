import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-0 blur-3xl opacity-40 transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${position.x - 128}px, ${position.y - 128}px)`,
        background: "radial-gradient(circle, rgba(37, 100, 235, 0.77) 0%, rgba(0,0,0,0) 70%)",
      }}
    ></div>
  );
}
