"use client";

import Button from "@/components/Button";
import { LucideIcon, Menu, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import MobileNav from "./MobileNav";

type NavItemProp = {
  title?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const NavItem = ({ title, icon: Icon, onClick }: NavItemProp) => {
    return (
      <li
          onClick={onClick}
            className="cursor-pointer p-2 dark:hover:bg-zinc-900 hover:bg-[#e1f0f7] rounded-full transition-all duration-500"
          >
            {Icon &&
            <Icon/>
            }
            {title?? ""}
          </li>
    )
  }

  return (
    <Fragment>
      <nav className="padding-container max-container py-4 flex items-center justify-between">
        <Link href="/" className="font-medium text-lg hover:animate-bounce">
          Offiong Bassey Edet
        </Link>
        <ul className="hidden md:flex gap-6 items-center justify-between font-medium">
          {/* <NavItem icon={audioPlay ? AudioLines : ListMusic} onClick={() => setAudioPlay((prev) => !prev)} /> */}
         
          <Link href="/">
            <NavItem title="About"/>
          </Link>
          <Link href="/publications">
            <NavItem title="Publications"/>
          </Link>
          {/* <Link href="/projects">
            <NavItem title="Projects"/>
          </Link> */}
          <li className="annimate-border-btn cursor-pointer p-[0.5px]">
            <Link href="/offiong-bassey-cv.pdf" target="_blank">
              <Button type="button" variant="primary" className="bg-black">
                Download CV
              </Button>
            </Link>
          </li>
          <NavItem icon={theme === "light" ? MoonStar : Sun} onClick={() => setTheme(theme === "dark" ? "light": "dark")} />
        </ul>
        <ul className="flex md:hidden items-center justify-center font-medium">
          {/* <NavItem icon={audioPlay ? AudioLines : ListMusic} onClick={() => setAudioPlay((prev) => !prev)} /> */}
          <NavItem icon={theme === "light" ? MoonStar : Sun} onClick={() => setTheme(theme === "dark" ? "light": "dark")} />
          <NavItem icon={Menu} onClick={() => setToggle(true)} />
        </ul>
      </nav>
      {/* <SocialToggle /> */}
      <MobileNav open={toggle} onClose={() => setToggle(false)} />
      {/* {audioPlay && <audio src="/alan-walker.mp3" autoPlay loop></audio>} */}
    </Fragment>
  );
};

export default Navbar;
