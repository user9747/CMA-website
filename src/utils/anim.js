import { gsap } from "gsap";
export const animate = ({ id, onAddImage, onSlideImage }) => {
  let tl = gsap.timeline({
    delay: 0,
    repeat: -1,
    defaults: {
      duration: 1.3,
      ease: "power4.out",
      delay: 0,
    },
  });
  tl.to(id, {
    x: "100%",
    opacity: 0,
    duration: 0,
    delay: 1,
    onComplete: (a) => {
      onAddImage();
    },
  }).to(id, {
    opacity: 1,
    x: 0,
    onComplete: (a) => {
      onSlideImage();
    },
    delay: "random(2,3)",
  });
};