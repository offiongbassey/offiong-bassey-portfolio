import { ArrowRight } from "lucide-react";
import Button from "../Button";
import Link from "next/link";

export type PublicationItemProps = {
    title: string;
    conference: string;
    description: string;
    link: string;
}


const PublicationItem = ({ title, conference, description, link }: PublicationItemProps) => {
    return (
        <div className="mt-6 border-b pb-10">
        <p className=" text-gray-500 text-xs md:text-sm font-semibold">{conference}</p>
        <p className="text-xl md:text-2xl font-bold">{title}</p>
        <p className="text-sm md:text-base pb-4">{description} </p>
        <Link href={link} target="_blank"><Button type="button" className="flex gap-2" variant="primary">Read More <ArrowRight /></Button></Link>
    </div>
    )
}

export default PublicationItem;