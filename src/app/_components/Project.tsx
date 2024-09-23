"use client";

import Button from "@/components/Button";
import { PROJECTS } from "@/context/ProjectData";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectSection = () => {
    const [projects, setProjects] = useState(PROJECTS); 
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const leftXValues = [200, -180, 150];
    const rightXValues = [-200, 180, -150];
    const yValues = [-10, -10, -10];

    gsap.utils.toArray(".project-row").forEach((row, index) => {
      const cardLeft = row.querySelector(".project-left") as HTMLElement;
      const cardRight = row.querySelector(".project-right") as HTMLElement;

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".project",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px) translateY(${progress * yValues[index]}px)`;

            cardRight.style.transform = `translateX(${
                progress * rightXValues[index]
              }px) translateY(${progress * yValues[index]}px)`;
          },
        },
      });
    });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, []);
    const handleImage = ({ project_id, index }: { project_id: string, index: number}) => {
      const updatedProjects = projects.map((project) => 
        project.id === project_id ? { ...project, default_image_index: index } : project
      );
      setProjects(updatedProjects);
    }

    return (
        <section className="project max-container mt-10">
           <div className=" padding-container flex items-center justify-between">
                <div className="flex items-center justify-start">
                    <div>
                        <h2 className="font-motion text-8xl bg-gradient-to-br from-orange-300 via-green-300 to-blue-300 bg-clip-text text-transparent">WORK <br/>DONE</h2>
                        <p className="text-medium italic">These are some of the works I&apos;ve done so far.</p>
                    </div>
                    <Image src="/tree.png" className="-rotate-12" alt="works" width={100} height={100}/>
                </div>
                <Button type="button" variant="primary" className="h-20 w-80">Explore All</Button>
           </div>
                {projects.map((project, index) => (
                    <div key={project.id} className={`project-row group flex ${index % 2 && "flex-row-reverse"} gap-72 justify-between my-32 items-center`}>
                        <div className={`w-[30%] card-down project-left ${index % 2 ? "text-left" : "text-right"}`}>
                            <h2 className="text-6xl font-extrabold">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className={`flex items-center ${index % 2 ? "justify-start" : "justify-end"} py-4`}><Button type="button" variant="primary">View Project</Button></div>
                        </div>
                        <div className={`project-right flex items-end justify-between overflow-hidden bg-cover bg-center bg-no-repeat w-[70%] h-[450px] rounded-3xl transition-all duration-700`} style={{ backgroundImage: `url(${project.images[project.default_image_index]})`}} >
                          <div className="hidden group-hover:grid grid-cols-6 gap-4 bg-gray-700/50 p-4 w-full">
                          {project.images.map((img, index) => 
                              <div onMouseEnter={() => handleImage({project_id: project.id, index})} key={index} className="bg-cover bg-center bg-no-repeat p-10 rounded-3xl border-[#d9edf9] border-2" style={{ backgroundImage: `url(${img})`}}/>
                          )}
                          </div>
                        </div>
                    </div>
                ))}
        </section>
    )
}

export default ProjectSection;