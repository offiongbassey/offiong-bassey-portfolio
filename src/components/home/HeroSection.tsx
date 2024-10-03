"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="padding-container max-container flex flex-col md:flex-row gap-4 items-center py-8 md:pt-20">
      <div className="md:w-[50%] flex md:block flex-col items-center md:items-start justify-center text-center md:text-left">
        <div className="flex items-end justify-end">
          <Image
            src="/hand.png"
            alt="Dev"
            width={60}
            className="hover:scale-125 dark:border-gray-900 border-gray-200 border p-2 rounded-full hover:-rotate-12 transition-all duration-500"
            height={60}
          />
        </div>
        <h4 className="text-3xl md:text-7xl dark:text-white text-black font-pacifico">
          An incredible
        </h4>
        <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r dark:from-orange-300 dark:via-purple-200 dark:to-blue-400 from-orange-900 via-purple-900 to-blue-900 font-semibold animate-gradient">
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
        <Link href="mailto:offiongbassidev@gmail.com" target="_blank">
          <Button
            type="button"
            variant="gradient"
            className="my-4 hover:animate-pulse hover:scale-105 transition-all duration-500"
          >
            Get in Touch
          </Button>
        </Link>
      </div>
      <div className="w-full md:w-[50%] bg-contain bg-no-repeat bg-center h-[200px] md:h-[450px] bg-banner" />
    </div>
  );
};

export default HeroSection;
