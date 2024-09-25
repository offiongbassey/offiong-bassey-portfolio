import GithubIcon from "@/svg/GithubIcon";
import InstagramIcon from "@/svg/InstagramIcon";
import LinkedInIcon from "@/svg/LinkedInIcon";
import MediumIcon from "@/svg/MediumIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import YoutubeIcon from "@/svg/YoutubeIcon";
import { EggFried } from "lucide-react";
import Link from "next/link";

const SocialToggle = () => {
  return (
    <div className="relative">
      <div className="fixed justify-end group -right-4 hover:right-8 md:right-8 bottom-14 md:bottom-32 z-40">
       <div className="hidden group-hover:block transition-all duration-500">
            <Link href="https://github.com/offiongbassey" target="_blank" className="absolute p-1 bg-[#d9edf9] rounded-full -top-5 left-3 z-50"><GithubIcon color="black" /></Link>
            <Link href="https://www.linkedin.com/in/offiong-bassey-dev" target="_blank" className="absolute p-1 bg-[#d9edf9] rounded-full -top-5 right-4 z-50"><LinkedInIcon color="black"/></Link>
            <Link href="https://twitter.com/OffiongBassi" target="_blank" className="absolute p-1 bg-[#d9edf9] rounded-full top-14 -left-8 z-50"><TwitterIcon color="black" /></Link>
            <Link href="https://www.instagram.com/offiong_bassi" target="_blank" className="absolute p-1 bg-[#d9edf9] rounded-full top-14 -right-8 z-50"> <InstagramIcon color="black" /></Link>
            <Link href="https://medium.com/@offiongbassey99" target="_blank" className="absolute p-1 bg-[#d9edf9] rounded-full top-[130px] left-3 z-50"><MediumIcon color="black" /></Link>
            <Link href="https://www.youtube.com/@OffiongBassey-zj5rv" target="_blank" className="absolute p-1 bg-[#d9edf9] rounded-full top-[130px] right-4 z-50"><YoutubeIcon color="black" /></Link>
       </div>
        <div className="md:border group-hover:border border-[#d9edf9] cursor-pointer py-2 px-10 group-hover:py-10 rounded-full group-hover:rotate-90 transition-all duration-500 group-hover:scale-125">
            <div className="rounded-full border border-[#d9edf9] p-2 hover:animate-spin">
                <div className="bg-black p-2 rounded-full border text-[#d9edf9] border-[#d9edf9]">
                    <EggFried />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialToggle;
