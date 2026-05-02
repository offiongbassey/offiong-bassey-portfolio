"use client";

import Button from "@/components/Button";
import GithubIcon from "@/svg/GithubIcon";
import LinkedInIcon from "@/svg/LinkedInIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import { GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const { theme } = useTheme();

    const color = theme === "light" ? "black" : "#ffff";
  return (
    <div className="padding-container max-container flex flex-col-reverse md:flex-row gap-4 items-center justify-center py-8 md:pt-10">
      <div className="md:w-[50%] flex md:block flex-col items-start md:items-start justify-start md:justify-center text-start md:text-left">
    
        <h4 className="text-3xl font-semibold md:text-7xl dark:text-white text-black">
          Offiong Bassey
        </h4>

        <div className="min-h-20 py-2">
          <p className="text-lg">Hi 👋, I&apos;m Offiong Bassey, a machine learning engineer and researcher specializing in <b>Natural Language Processing (NLP)</b>. My work spans audio processing, speech synthesis, machine translation, and real-time conversational AI, with a particular focus on low-resource and multilingual languages.</p>
          <p className="text-lg my-4">My research explores <b>how multilingual models can perform efficiently in low-resource settings</b>, especially under limited data conditions. At <Link className="font-semibold" href="https://www.plotweaver.app/" target="_blank">Plotweaver</Link>, where I currently work as a Machine Learning Engineer, I apply this to improving the scalability and efficiency of language models for practical, real-world applications.</p>
          <p className="text-lg">Outside of work, I enjoy reading, watching movies, singing classical choral music, playing the trumpet, and listening to podcasts on AI and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 items-center justify-start">
          <Link href="https://scholar.google.com/citations?user=lQYjASYAAAAJ&hl=en" target="_blank">
            <Button
              type="button"
              variant="primary"
              className="h-12 hover:animate-pulse hover:scale-105 transition-all duration-500 flex items-center justify-start gap-2"
            >
              <GraduationCap /> Scholar
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/offiong-bassey-dev" target="_blank">
            <Button
              type="button"
              variant="primary"
              className="h-12 hover:animate-pulse hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2"
            >
              <LinkedInIcon color={color} /> LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/offiongbassey" target="_blank">
            <Button
              type="button"
              variant="primary"
              className="h-12 hover:animate-pulse hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2"
            >
              <GithubIcon color={color} /> Github
            </Button>
          </Link>
          
         
          <Link href="https://twitter.com/OffiongBassi" target="_blank">
            <Button
              type="button"
              variant="primary"
              className=" h-12 hover:animate-pulse hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2"
            >
              <TwitterIcon color={color} /> Twitter
            </Button>
          </Link>
         
        </div>
       
      </div>
      {/* <div className="w-full md:w-[50%] bg-contain bg-no-repeat bg-center h-[200px] md:h-[450px] bg-banner" /> */}
      <div className="w-[80%] md:w-[50%] flex md:items-center md:justify-center">
        <Image src="/offiong.jpeg" className="rounded-[50px] shadow-lg shadow-gray-800" alt="offiong" width={400} height={300} />
      </div>
    </div>
  );
};

export default HeroSection;
