import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ResearchInterests } from "@/components/site/research-interests";
import { Affiliations } from "@/components/site/affiliations";
import { Publications } from "@/components/site/publications";
import { News } from "@/components/site/news";
import { Positions } from "@/components/site/positions";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="paper-texture flex-1">
        <Hero />
        <ResearchInterests />
        <Publications />
        <Affiliations />
        <News />
        <Positions />
      </main>
      <Footer />
    </>
  );
}
