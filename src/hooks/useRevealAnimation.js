import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useRevealAnimation(targetClass = ".reveal-section") {
  useEffect(() => {
    const elements = gsap.utils.toArray(targetClass);

    gsap.set(elements, {
      opacity: 0,
      y: 50,
      willChange: 'opacity, transform',
    });

    ScrollTrigger.batch(elements, {
      interval: 0.2,
      batchMax: 5,
      start: "top 85%",
      end: "bottom 10%",
      fastScrollEnd: true,

      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        });
      },

      onLeave: () => { },

      //No animation on scroll-up
      onEnterBack: () => { },
      onLeaveBack: () => { },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [targetClass]);
}
