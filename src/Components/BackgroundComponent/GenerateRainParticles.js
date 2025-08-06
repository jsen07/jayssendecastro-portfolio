const getRandom = (min, max) => Math.random() * (max - min) + min;

const sizes = [1, 1.5, 2];

export const generateRainParticles = (count) => {
  return Array.from({ length: count }).map(() => {
    return {
      x: getRandom(0, 1920).toFixed(1),
      size: sizes[Math.floor(Math.random() * sizes.length)],
      dur: getRandom(5, 9).toFixed(2),
      delay: getRandom(0, 9).toFixed(2),
      opacityStart: 0.8,
      opacityEnd: 0,
      fallDistance: 1080,
    };
  });
};
