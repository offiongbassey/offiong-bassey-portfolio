import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PUBLICATIONS } from "../publications/data";
import PublicationItem from "../publications/PublicationItem";

const PublicationsSection = () => {
    return (
        <div className="padding-container mt-20">
            <hr/>
            <div className="flex gap-2 items-center justify-between mt-6">
                <h4 className="text-2xl">Selected Publications</h4>
                <Link href="https://scholar.google.com/citations?user=lQYjASYAAAAJ&hl=en" target="_blank" className="flex gap-2" >All Publications <ArrowRight /></Link>
            </div>
           
           {PUBLICATIONS.filter((item) => item.selected).map((article, key) => (
            <PublicationItem key={key} title={article.title} conference={article.conference} description={article.description} link={article.link} />
           )) }
            
        </div>
    )
}

export default PublicationsSection;