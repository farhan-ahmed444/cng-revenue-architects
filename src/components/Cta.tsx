"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import { smoothScrollTo } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".cta-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        ".cta-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-bg-secondary"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern corporate headquarters"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="cta-label inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-gold/20 bg-accent-gold/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse-glow" />
          <span className="text-accent-gold text-xs tracking-widest uppercase font-medium">
            Ready to Transform?
          </span>
        </div>

        <h2 className="cta-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
          Engineered by Us.
          <br />
          <span className="text-gradient">Driven by You.</span>
        </h2>

        <p className="cta-heading text-text-secondary/60 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Build a revenue infrastructure capable of supporting sustainable
          growth, operational excellence, and long-term enterprise value.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            onClick={() => smoothScrollTo("contact")}
            variant="primary"
            className="text-base px-8 py-4"
          >
            Schedule a Consultation
          </MagneticButton>
          <MagneticButton
            onClick={() => smoothScrollTo("contact")}
            variant="secondary"
            className="text-base px-8 py-4"
          >
            Contact the Firm
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
