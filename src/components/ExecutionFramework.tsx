"use client";

import { useEffect, useRef } from "react";
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
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Comprehensive audit of revenue operations, market position, and growth constraints.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Design the commercial infrastructure blueprint tailored to your enterprise.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Align",
    description:
      "Synchronize product, people, and process around the new architecture.",
    icon: Target,
  },
  {
    number: "04",
    title: "Automate",
    description:
      "Deploy technology wrappers and automation frameworks around validated structures.",
    icon: Cpu,
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Execute the growth plan with measurable milestones and continuous optimization.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Maximize",
    description:
      "Drive enterprise asset value through sustained operational excellence.",
    icon: Award,
  },
];

export default function ExecutionFramework() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "center 60%",
              scrub: 1,
            },
          }
        );
      }

      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
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
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="fw-label text-accent-gold text-xs tracking-[0.25em] uppercase mb-4 font-medium">
            Methodology
          </div>
          <h2 className="fw-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto">
            The{" "}
            <span className="text-gradient">Execution Framework</span>
            <br />
            From Diagnosis to Value
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 overflow-hidden">
            <div
              ref={lineRef}
              className="w-full h-full gold-gradient origin-top"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepsRef.current[i] = el;
                  }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Icon size={22} className="text-black" />
                  </div>

                  <div
                    className={`flex-1 md:w-1/2 md:max-w-[calc(50%-3rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                  >
                    <span className="text-accent-gold/40 text-sm font-mono">
                      Step {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
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
          <p className="text-text-secondary/30 text-xs tracking-widest uppercase">
            A proven methodology for enterprise transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
