"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Revenue Architecture",
  "Commercial Infrastructure",
  "Growth Automation",
  "Process Optimization",
  "Enterprise Alignment",
];

export default function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-8 border-y border-white/5 overflow-hidden bg-bg-secondary"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-12 shrink-0">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-12">
                <span className="text-sm tracking-[0.15em] uppercase text-text-secondary/40 font-medium">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-gold/30" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg-secondary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-secondary to-transparent z-10" />
    </section>
  );
}
