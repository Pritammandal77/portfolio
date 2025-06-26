import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useRevealAnimation(targetClass = ".reveal-section") {
  useEffect(() => {
    // Initial hidden state (GPU-accelerated)
    gsap.set(targetClass, {
      opacity: 0,
      y: 40,
      willChange: 'opacity, transform',
    });

    ScrollTrigger.batch(targetClass, {
      interval: 0.15, // reduces trigger frequency (MOBILE FRIENDLY)
      batchMax: 4,    // only 4 elements at once => smooth for mobiles
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
      onLeave: (batch) => {
        gsap.set(batch, { opacity: 0, y: 40 });
      },
      onEnterBack: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
      onLeaveBack: (batch) => {
        gsap.set(batch, { opacity: 0, y: 40 });
      },
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [targetClass]);
}
