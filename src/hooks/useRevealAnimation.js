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
      force3D: true,
    });

    ScrollTrigger.batch(elements, {
      interval: 0.2,       // more relaxed, smoother on low-end mobile
      batchMax: 3,         
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,    
          ease: "power2.out",
          stagger: 0.15,
          overwrite: "auto",
        });
      },
      onLeave: (batch) => {
        gsap.set(batch, { opacity: 0, y: 50 });
      },
      onEnterBack: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          overwrite: "auto",
        });
      },
      onLeaveBack: (batch) => {
        gsap.set(batch, { opacity: 0, y: 50 });
      },
      start: "top 90%",
      end: "bottom 10%",
      fastScrollEnd: true,      // for fast flick scrolls
      toggleActions: "play none none none",
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [targetClass]);
}
