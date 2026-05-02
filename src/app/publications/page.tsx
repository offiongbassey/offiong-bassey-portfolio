"use client";

import Button from "@/components/Button";
import { PUBLICATIONS } from "@/components/publications/data";
import PublicationItem, { PublicationItemProps } from "@/components/publications/PublicationItem";
import { ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";


export default function Publication() {
  return (
   <div className="padding-container mt-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
    <h2 className="text-5xl font-semibold">Publications</h2>
    <Link className="hidden md:block" href="https://scholar.google.com/citations?user=lQYjASYAAAAJ&hl=en" target="_blank">
            <Button
              type="button"
              variant="primary"
              className="h-12 hover:animate-pulse hover:scale-105 transition-all duration-500 flex items-center justify-start gap-2"
            >
               My Google Scholar <ArrowRight/>
            </Button>
        </Link>
    </div>
       
        <p className="my-4"><b>Research Interest:</b> Natural Language Processing, Speech Recognition, Speech Synthesis, Machine Translation, Low-Resource Languages, African Languages, Multilingual Models, Conversational AI, Language Model Efficiency.</p>
        <Link className="block mb-6 md:hidden" href="https://scholar.google.com/citations?user=lQYjASYAAAAJ&hl=en" target="_blank">
            <Button
              type="button"
              variant="primary"
              className="h-12 hover:animate-pulse hover:scale-105 transition-all duration-500 flex items-center justify-start gap-2"
            >
               My Google Scholar <ArrowRight/>
            </Button>
        </Link>
        <hr/>

        {PUBLICATIONS.map((article) => (
            <PublicationItem title={article.title} conference={article.conference} description={article.description} link={article.link} />
        )) }
   </div>
  );
}
