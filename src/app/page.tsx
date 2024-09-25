"use client";

import HeroSection from "./_components/HeroSection";
import ProjectSection from "./_components/Project";
import StackSection from "./_components/StackSection";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root >
    <main className="py-8 md:py-20">
        <HeroSection />
        <StackSection/>
        <ProjectSection/>
        
    </main>
    </ReactLenis>
  );
}
