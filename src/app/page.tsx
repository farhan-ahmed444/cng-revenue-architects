"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import ThreePs from "@/components/ThreePs";
import Services from "@/components/Services";
import WhyCng from "@/components/WhyCng";
import ExecutionFramework from "@/components/ExecutionFramework";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ErrorBoundary from "@/components/ErrorBoundary";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {}, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <ErrorBoundary>
      <div ref={mainRef} className="relative">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <TrustBar />
        <About />
        <ThreePs />
        <Services />
        <WhyCng />
        <ExecutionFramework />
        <Cta />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
