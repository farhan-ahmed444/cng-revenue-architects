"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999]">
      <div
        ref={barRef}
        className="h-full origin-left gold-gradient"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
