"use client";

import HeroSection from "./_components/HeroSection";
import StackSection from "./_components/StackSection";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root >
    <main className="py-8 md:py-20">
      <div className="padding-container max-container">
        <HeroSection />
        <StackSection/>
      </div>
    </main>
    </ReactLenis>
  );
}
