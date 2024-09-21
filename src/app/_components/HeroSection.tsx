"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="md:flex-1">
        <div className="flex items-end justify-end">
          <Image
            src="/hand.png"
            alt="Dev"
            width={60}
            className="hover:scale-125 border-gray-900 border p-2 rounded-full hover:-rotate-12 transition-all duration-500"
            height={60}
          />
        </div>
        <h4 className="text-3xl md:text-5xl text-white font-semibold">An incredible</h4>
        <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-purple-200 to-blue-400 font-semibold animate-gradient">
          Software Engineer
        </h1>
        <div className="min-h-20 py-2">
          <TypeAnimation
            sequence={[
              "Hi 👋, my name is Offiong Bassey and I am a Software Engineer, passionate about solving complex problems and building innovative products that benefit humanity.",
              1000,
            ]}
            wrapper="p"
            speed={80}
            style={{ display: "inline-block" }}
            className=""
          />
        </div>
        <Button
          type="button"
          variant="gradient"
          className="my-4 hover:animate-pulse hover:scale-105 transition-all duration-500"
        >
          Get in Touch
        </Button>
      </div>
      <div className="w-full md:flex-1 bg-contain bg-no-repeat bg-center h-[400px] bg-banner" />
    </div>
  );
};

export default HeroSection;
