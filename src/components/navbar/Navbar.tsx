import Button from "@/components/Button";
import { AudioLines, Menu, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="padding-container max-container py-4 flex items-center justify-between">
            <Link href="/" className="text-white font-medium text-lg hover:animate-bounce">Offi ✌️</Link>
            <ul className="hidden md:flex gap-6 items-center justify-between font-medium">
                <li className="cursor-pointer border-r border-zinc-300 px-6"> <AudioLines /> 
                {/* <ListMusic /> */}
                </li>
                <li className="cursor-pointer"><Sun /></li>
                <li className="text-hover px-4 py-2 cursor-pointer">Projects</li>
                <li className="annimate-border-btn p-[0.5px]"><Button type="button" variant="primary" className="bg-black">Contact me</Button></li>
            </ul>
            <ul className="flex md:hidden gap-6 items-center justify-center font-medium">
                <li className="cursor-pointer"><Sun /></li>
                <li><Menu /></li>
            </ul>
        </nav>
    )
}

export default Navbar;