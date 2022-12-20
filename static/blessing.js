import { confetti } from "https://code4fukui.github.io/confetti-es/confetti.js";

// reference
// https://github.com/haruyuki-16278/chiritsumo/blob/master/src/app/confetti.service.ts
// https://github.com/haruyuki-16278/chiritsumo/blob/master/src/app/routed/home/component/level-up/level-up.component.ts

export const blessing = () => {

  confetti({
    particleCount: 200, // 花吹雪の個数
    spread: 70,
    angle: 60,
    origin: { x: 0, y: 1 } // 左端
  })
  confetti({
    particleCount: 200,
    spread: 70,
    angle: 120,
    origin: { x: 1, y: 1 } // 右端
  })
  const star = () => {
    const x = Math.random();
    const y = Math.random();
    const defaults = {
      spread: 360, // 360度 ± 22.5度に出現
      ticks: 50,
      gravity: 0,
      startVelocity: 30,
      shapes: ['star'],
      origin: { x, y },
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };
    confetti({
      ...defaults,
      particleCount: 100,
      scalar: 1.2,
      shapes: ['star']
    })
    confetti({
      ...defaults,
      particleCount: 100,
      scalar: 0.75,
      shapes: ['circle']
    })
  };
  setTimeout(star, 600);
  setTimeout(star, 1000);
};
