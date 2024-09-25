"use client";

import Button from "@/components/Button";
import { AudioLines, ListMusic, Menu, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [audioPlay, setAudioPlay] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      <nav className="padding-container max-container py-4 flex items-center justify-between">
        <Link href="/" className="font-medium text-lg hover:animate-bounce">
          Offi ✌️
        </Link>
        <ul className="hidden md:flex gap-6 items-center justify-between font-medium">
          <li
            className="cursor-pointer border-r border-zinc-300 px-6"
            onClick={() => setAudioPlay((prev) => !prev)}
          >
            {audioPlay ? <AudioLines /> : <ListMusic />}
          </li>
          {theme === "light" ? (
            <li className="cursor-pointer p-2 hover:bg-[#e1f0f7] rounded-full transition-all duration-500" onClick={() => setTheme("dark")}>
              <MoonStar />
            </li>
          ) : (
            <li className="cursor-pointer p-2 hover:bg-zinc-900 rounded-full transition-all duration-500" onClick={() => setTheme("light")}>
              <Sun />
            </li>
          )}
          <li className="dark:hover:bg-zinc-900 hover:bg-[#e1f0f7] rounded-full transition-all duration-500 px-4 py-2 cursor-pointer">
            Projects
          </li>
          <li className="annimate-border-btn cursor-pointer p-[0.5px]">
            <Link href="mailto:offiongbassidev@gmail.com" target="_blank">
              <Button type="button" variant="primary" className="bg-black">
                Contact me
              </Button>
            </Link>
          </li>
        </ul>
        <ul className="flex md:hidden gap-6 items-center justify-center font-medium">
          <li
            className="cursor-pointer border-r border-zinc-300 px-6"
            onClick={() => setAudioPlay((prev) => !prev)}
          >
            {audioPlay ? <AudioLines /> : <ListMusic />}
          </li>
          {theme === "light" ? (
            <li className="cursor-pointer" onClick={() => setTheme("dark")}>
              <MoonStar />
            </li>
          ) : (
            <li className="cursor-pointer" onClick={() => setTheme("light")}>
              <Sun />
            </li>
          )}
          <li onClick={() => setToggle(true)}>
            <Menu />
          </li>
        </ul>
      </nav>
      <MobileNav open={toggle} onClose={() => setToggle(false)} />
      {audioPlay && <audio src="/alan-walker.mp3" autoPlay loop></audio>}
    </Fragment>
  );
};

export default Navbar;
