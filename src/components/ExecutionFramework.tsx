"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search, Building2, Target, Cpu, TrendingUp, Award,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Diagnose",
    tagline: "Discovery & Assessment",
    description:
      "Comprehensive audit of revenue operations, market position, and growth constraints. We map your entire commercial landscape to identify hidden bottlenecks.",
    icon: Search,
    tags: ["Revenue Ops", "Market Position", "Constraints"],
  },
  {
    number: "02",
    title: "Architect",
    tagline: "Blueprint & Design",
    description:
      "Design the commercial infrastructure blueprint tailored to your enterprise. A custom framework that aligns with your unique growth trajectory.",
    icon: Building2,
    tags: ["Infrastructure", "Framework", "Roadmap"],
  },
  {
    number: "03",
    title: "Align",
    tagline: "Synchronization",
    description:
      "Synchronize product, people, and process around the new architecture. Every stakeholder, system, and workflow moves in concert.",
    icon: Target,
    tags: ["Stakeholders", "Systems", "Workflows"],
  },
  {
    number: "04",
    title: "Automate",
    tagline: "Technology Wrappers",
    description:
      "Deploy technology wrappers and automation frameworks around validated structures. Eliminate friction before scaling.",
    icon: Cpu,
    tags: ["Automation", "Tech Stack", "Integration"],
  },
  {
    number: "05",
    title: "Scale",
    tagline: "Growth Execution",
    description:
      "Execute the growth plan with measurable milestones and continuous optimization. Data-driven decisions at every inflection point.",
    icon: TrendingUp,
    tags: ["Milestones", "Optimization", "Analytics"],
  },
  {
    number: "06",
    title: "Maximize Enterprise Value",
    tagline: "Value Creation",
    description:
      "Drive sustained enterprise asset value through operational excellence. Long-term value creation becomes the natural outcome.",
    icon: Award,
    tags: ["Asset Value", "Excellence", "Legacy"],
  },
];

function StepNode({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;
  const offset = index === 0 ? "md:translate-x-0" :
    index === 1 ? "md:translate-x-24" :
    index === 2 ? "md:-translate-x-12" :
    index === 3 ? "md:translate-x-20" :
    index === 4 ? "md:-translate-x-8" :
    "md:translate-x-0 md:scale-[1.08]";

  return (
    <div
      data-step={step.number}
      className="group step-card relative flex flex-col items-center"
    >
      <div className="relative w-full max-w-lg" style={{ perspective: 1200 }}>
        <div
          className={`card-inner relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 lg:p-8 transition-all duration-700 ${offset}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />

          <div className="absolute top-0 right-0 text-[140px] lg:text-[180px] font-bold leading-none text-white/[0.015] select-none pointer-events-none water-mark"
            style={{ transform: "translateZ(-20px)" }}
          >
            {step.number}
          </div>

          <div className="relative z-10 flex items-start gap-5">
            <div className="relative flex-shrink-0">
              <div className="icon-ring relative w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow duration-500">
                <Icon size={24} className="text-black" />
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-accent-gold/0 group-hover:bg-accent-gold/10 transition-all duration-500 blur-md -z-10" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-[10px] font-mono font-semibold tracking-[0.25em] text-accent-gold/50">
                  STEP {step.number}
                </span>
                <span className="hidden sm:block text-[10px] text-white/20 tracking-wider">
                  {"/"}{"06"}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 leading-tight">
                {step.title}
              </h3>

              <p className="text-[11px] uppercase tracking-[0.2em] text-accent-gold/40 font-medium mb-3">
                {step.tagline}
              </p>

              <p className="text-sm lg:text-base text-text-secondary/60 leading-relaxed">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-white/30 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/[0.06] pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/[0.06] pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/[0.06] pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/[0.06] pointer-events-none" />

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
      </div>

      <div className="step-dot relative z-20 w-5 h-5 rounded-full border-2 border-accent-gold/30 bg-bg-secondary mt-4 transition-all duration-500 group-hover:border-accent-gold group-hover:shadow-[0_0_20px_rgba(244,196,48,0.3)] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent-gold/60 group-hover:bg-accent-gold transition-colors duration-500" />
      </div>

      {!isLast && (
        <div className="step-connector w-[2px] h-16 bg-gradient-to-b from-accent-gold/30 to-accent-gold/5 mx-auto origin-top" />
      )}
    </div>
  );
}

export default function ExecutionFramework() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      ScrollTrigger.create({
        trigger: ".fw-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(".fw-label", { y: 0, opacity: 1, duration: 0.6 });
          gsap.to(".fw-heading", { y: 0, opacity: 1, duration: 0.8, delay: 0.15 });
        },
        onLeaveBack: () => {
          gsap.to(".fw-label", { y: 30, opacity: 0, duration: 0.3 });
          gsap.to(".fw-heading", { y: 40, opacity: 0, duration: 0.3 });
        },
      });

      const cards = document.querySelectorAll(".step-card");

      gsap.utils.toArray(cards).forEach((card, i) => {
        const el = card as HTMLElement;
        const inner = el.querySelector(".card-inner") as HTMLElement;
        const dot = el.querySelector(".step-dot") as HTMLElement;
        const conn = el.querySelector(".step-connector") as HTMLElement;
        const watermark = el.querySelector(".water-mark") as HTMLElement;

        gsap.set(inner, {
          rotateX: 20,
          y: 60,
          opacity: 0,
          transformOrigin: "center bottom",
          transformStyle: "preserve-3d",
        });
        gsap.set(dot, { scale: 0, opacity: 0 });
        if (conn) gsap.set(conn, { scaleY: 0, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(inner, {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        }, 0)
          .to(dot, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }, 0.3)
          .to(watermark, { z: 0, duration: 0.6 }, 0);

        if (conn) {
          tl.to(conn, { scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.2);
        }
      });

      if (progressRef.current) {
        const dots = progressRef.current.querySelectorAll(".progress-dot");

        dots.forEach((dot, i) => {
          ScrollTrigger.create({
            trigger: cards[i],
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              dots.forEach((d) => {
                (d as HTMLElement).classList.remove("active");
                (d as HTMLElement).classList.remove("passed");
              });
              for (let j = 0; j < i; j++) {
                (dots[j] as HTMLElement).classList.add("passed");
              }
              (dot as HTMLElement).classList.add("active");
            },
            onLeaveBack: () => {
              dots.forEach((d) => {
                (d as HTMLElement).classList.remove("active");
                (d as HTMLElement).classList.remove("passed");
              });
              for (let j = 0; j < i; j++) {
                (dots[j] as HTMLElement).classList.add("passed");
              }
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-bg-secondary"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(244,196,48,0.03)_0%,_transparent_60%)]" />

      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />

      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-accent-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/3 right-[15%] w-56 h-56 rounded-full bg-accent-amber/5 blur-[100px]" />

      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="geo-circle absolute rounded-full border border-white/[0.02]"
          style={{
            width: `${120 + i * 80}px`,
            height: `${120 + i * 80}px`,
            top: `${20 + i * 25}%`,
            right: `${10 + i * 8}%`,
          }}
        />
      ))}

      <div
        className="geo-diamond absolute w-8 h-8 border border-accent-gold/10 rotate-45"
        style={{ top: "35%", left: "8%" }}
      />
      <div
        className="geo-diamond absolute w-5 h-5 border border-accent-gold/5 rotate-45"
        style={{ bottom: "25%", right: "12%" }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="fw-header text-center mb-20 lg:mb-24">
          <div className="fw-label inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-gold/20 bg-accent-gold/5 mb-6"
            style={{ opacity: 0, y: 30 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <span className="text-accent-gold text-xs tracking-widest uppercase font-medium">
              Methodology
            </span>
          </div>
          <h2 className="fw-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white max-w-3xl mx-auto"
            style={{ opacity: 0, y: 40 }}
          >
            The{" "}
            <span className="text-gradient">Execution Framework</span>
            <br />
            <span className="text-text-secondary/40 text-xl sm:text-2xl lg:text-3xl font-normal">
              From Diagnosis to Enterprise Value
            </span>
          </h2>
        </div>

        <div ref={stepsRef} className="relative flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <StepNode
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.02]">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse-glow" />
            <span className="text-text-secondary/30 text-xs tracking-widest uppercase">
              A proven 6-step methodology for enterprise transformation
            </span>
          </div>
        </div>
      </div>

      <div
        ref={progressRef}
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-50"
      >
        {steps.map((step, i) => (
          <a
            key={step.number}
            href={`#execution`}
            className="progress-dot group relative flex items-center justify-center w-3 h-3"
            onClick={(e) => {
              e.preventDefault();
              const cards = document.querySelectorAll(".step-card");
              if (cards[i]) {
                cards[i].scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
          >
            <span className="block w-3 h-3 rounded-full border border-white/20 bg-bg-secondary transition-all duration-300 group-hover:border-accent-gold group-hover:bg-accent-gold/20" />
            <span className="absolute right-5 text-[10px] text-white/0 group-hover:text-white/40 tracking-wider whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100">
              {step.title}
            </span>
          </a>
        ))}
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-gold/20 to-transparent mt-1" />
      </div>
    </section>
  );
}
