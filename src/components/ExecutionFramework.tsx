"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Search,
  Building2,
  Target,
  Cpu,
  TrendingUp,
  Award,
  ArrowDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Comprehensive audit of revenue operations, market position, and growth constraints. We map your entire commercial landscape to identify hidden bottlenecks.",
    icon: Search,
    color: "from-amber-400/20 to-transparent",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Design the commercial infrastructure blueprint tailored to your enterprise. A custom framework that aligns with your unique growth trajectory.",
    icon: Building2,
    color: "from-amber-500/20 to-transparent",
  },
  {
    number: "03",
    title: "Align",
    description:
      "Synchronize product, people, and process around the new architecture. Every stakeholder, system, and workflow moves in concert.",
    icon: Target,
    color: "from-yellow-400/20 to-transparent",
  },
  {
    number: "04",
    title: "Automate",
    description:
      "Deploy technology wrappers and automation frameworks around validated structures. Eliminate friction before scaling.",
    icon: Cpu,
    color: "from-amber-400/20 to-transparent",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Execute the growth plan with measurable milestones and continuous optimization. Data-driven decisions at every inflection point.",
    icon: TrendingUp,
    color: "from-yellow-500/20 to-transparent",
  },
  {
    number: "06",
    title: "Maximize Enterprise Value",
    description:
      "Drive sustained enterprise asset value through operational excellence. Long-term value creation becomes the natural outcome.",
    icon: Award,
    color: "from-amber-500/20 to-transparent",
  },
];

export default function ExecutionFramework() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".fw-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        ".fw-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      );

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1.5,
            },
          }
        );
      }

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
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
          src="https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1920&q=80"
          alt="Abstract data visualization"
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-accent-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-48 h-48 rounded-full bg-accent-amber/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="fw-label inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-gold/20 bg-accent-gold/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <span className="text-accent-gold text-xs tracking-widest uppercase font-medium">
              Methodology
            </span>
          </div>
          <h2 className="fw-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            The{" "}
            <span className="text-gradient">Execution Framework</span>
            <br />
            <span className="text-text-secondary/40 text-xl sm:text-2xl lg:text-3xl font-normal">
              From Diagnosis to Enterprise Value
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 overflow-hidden">
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-accent-gold/50 via-accent-gold/30 to-accent-gold/50 origin-top"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="space-y-10 md:space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <div className="relative z-20 flex-shrink-0 w-[48px] h-[48px] rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-amber-500/30 ring-[3px] ring-bg-secondary">
                    <Icon size={20} className="text-black" />
                  </div>

                  <div
                    className={`group relative flex-1 md:w-1/2 md:max-w-[calc(50%-3rem)] ${
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10"
                    }`}
                  >
                    <div className="relative p-6 lg:p-8 rounded-2xl glass-light hover:border-accent-gold/30 transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 right-0 text-[120px] lg:text-[160px] font-bold leading-none text-white/[0.02] select-none pointer-events-none">
                        {step.number}
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4 md:justify-start">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold/20 to-transparent flex items-center justify-center md:hidden">
                            <Icon size={18} className="text-accent-gold" />
                          </div>
                          <span className="text-accent-gold/60 text-xs font-mono font-semibold tracking-wider">
                            STEP {step.number}
                          </span>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                          {step.title}
                        </h3>

                        <p className="text-text-secondary/60 text-sm lg:text-base leading-relaxed max-w-md">
                          {step.description}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-accent-gold/40 text-[10px] tracking-widest uppercase">
                          <span>Step {step.number} of 06</span>
                        </div>
                      </div>
                    </div>

                    {i < steps.length - 1 && (
                      <div className="hidden md:flex absolute -bottom-10 left-1/2 -translate-x-1/2 text-accent-gold/20">
                        <ArrowDown size={20} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.02]">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse-glow" />
            <span className="text-text-secondary/30 text-xs tracking-widest uppercase">
              A proven 6-step methodology for enterprise transformation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
