import React from "react";

const PARTICLE_TYPES = [
  { id: "particle-teal-400", r: 1, opacity: 0.8, color: "#38bdf8" },
  { id: "particle-teal-500", r: 1.3, opacity: 0.8, color: "#22d3ee" },
  { id: "particle-teal-600", r: 1.5, opacity: 0.8, color: "#14b8a6" },
  { id: "particle-teal-700", r: 1.8, opacity: 0.8, color: "#0d9488" },
  { id: "particle-teal-800", r: 2, opacity: 0.8, color: "#0f766e" },
];

const generateParticleProps = (index, width = 1920, height = 1080) => {
  const type =
    PARTICLE_TYPES[Math.floor(Math.random() * PARTICLE_TYPES.length)];

  const x = Math.floor(Math.random() * width);

  const y = 0;

  const dur = (Math.random() * 3 + 5).toFixed(1);
  const begin = (Math.random() * dur).toFixed(1);

  return {
    ...type,
    x,
    y,
    dur,
    begin,
  };
};

const RainParticles = ({ count = 10 }) => {
  const particles = Array.from({ length: count }).map((_, i) =>
    generateParticleProps(i)
  );

  return (
    <div
      className="fixed inset-0 w-full h-screen pointer-events-none -z-10"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: "transparent" }}
      >
        <defs>
          {PARTICLE_TYPES.map(({ id, r, opacity, color }) => (
            <circle key={id} id={id} r={r} fill={color} opacity={opacity} />
          ))}
        </defs>

        {particles.map(({ id, x, y, dur, begin }, i) => (
          <use key={i} href={`#${id}`} x={x} y={y}>
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="0 1080"
              dur={`${dur}s`}
              begin={`${begin}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.8"
              to="0"
              dur={`${dur}s`}
              begin={`${begin}s`}
              repeatCount="indefinite"
            />
          </use>
        ))}
      </svg>
    </div>
  );
};

export default RainParticles;
