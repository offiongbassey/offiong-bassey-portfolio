"use client";

import NewsSection from "@/components/home/NewsSection";
import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";
import StackSection from "../components/home/StackSection";
import { ReactLenis } from "lenis/react";
import PublicationsSection from "@/components/home/PublicationsSection";

export default function Home() {
  return (
    <ReactLenis root >
        <HeroSection />
        <NewsSection/>
        <PublicationsSection/>
    </ReactLenis>
  );
}
