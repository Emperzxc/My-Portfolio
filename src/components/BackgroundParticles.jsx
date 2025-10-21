import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "#0f172a", // Optional fallback bg
          },
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#60a5fa",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 0.6,
          },
        },
      }}
    />
  );
}
