"use client";

import GithubIcon from "@/svg/GithubIcon";
import InstagramIcon from "@/svg/InstagramIcon";
import LinkedInIcon from "@/svg/LinkedInIcon";
import MediumIcon from "@/svg/MediumIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import YoutubeIcon from "@/svg/YoutubeIcon";
import { MailMinus } from "lucide-react";
import Link from "next/link";

const Footer = () => {
   
    return (
        <footer className="padding-container max-container flex flex-col md:flex-row justify-between gap-4 items-center py-10 border-t border-zinc-900">
            
            <div className="flex gap-4 items-center justify-center">
                <Link href="https://github.com/offiongbassey" target="_blank">
                    <GithubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/offiong-bassey-dev" target="_blank">
                    <LinkedInIcon />
                </Link>
                <Link href="https://twitter.com/OffiongBassi" target="_blank">
                    <TwitterIcon />
                </Link>
                <Link href="https://www.instagram.com/offiong_bassi/" target="_blank">
                    <InstagramIcon />
                </Link>
                <Link href="https://medium.com/@offiongbassey99" target="_blank">
                    <MediumIcon />
                </Link>
                <Link href="https://www.youtube.com/@OffiongBassey-zj5rv" target="_blank">
                    <YoutubeIcon />
                </Link>
            </div>
            <p className="text-[#A7D4EE] flex gap-4"><MailMinus /> offiongbassey99@gmail.com</p>
        </footer>
    )
}

export default Footer;