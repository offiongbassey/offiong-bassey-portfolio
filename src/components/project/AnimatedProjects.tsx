"use client";

import gsap from "gsap";
import { Fragment, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectType } from "@/context/ProjectData";
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";

type Props = {
  projects: ProjectType[];
  handleImage: ({
    project_id,
    index,
  }: {
    project_id: string;
    index: number;
  }) => void;
};

const AnimatedProjects = ({ projects, handleImage }: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const leftXValues = [200, -180, 150];
    const rightXValues = [-200, 180, -150];
    const yValues = [-10, -10, -10];

    gsap.utils.toArray(".project-row").forEach((row, index) => {
      const cardLeft = (row as HTMLElement).querySelector(
        ".project-left"
      ) as HTMLElement;
      const cardRight = (row as HTMLElement).querySelector(
        ".project-right"
      ) as HTMLElement;

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
    };
  }, []);

  return (
    <Fragment>
      {projects.slice(0, 3).map((project, index) => (
        <div
          key={project.id}
          className={`project-row group px-4 md:px-0 flex flex-col md:flex-row ${
            index % 2 && "md:flex-row-reverse"
          } gap-4 md:gap-72 md:justify-between my-10 md:my-32 md:items-center`}
        >
          <div
            className={`hidden md:block w-full md:w-[30%] card-down project-left ${
              index % 2 ? "text-left" : "text-left md:text-right"
            }`}
          >
            <h2 className="text-6xl font-extrabold">{project.title}</h2>
            <p>{project.description}</p>
            <div
              className={`flex items-center ${
                index % 2 ? "justify-start" : "justify-start md:justify-end"
              } py-4`}
            >
              <Link href={project.link} target="_blank">
                <Button
                  type="button"
                  variant="primary"
                  className="hover:text-black bg-black dark:hover:text-white text-white hover:bg-transparent"
                >
                  View Project
                </Button>
              </Link>
            </div>
          </div>
          <div
            className={`relative project-right overflow-hidden w-full md:w-[70%] h-[200px] md:h-[250px] lg:h-[450px] rounded-3xl`}
          >
            <Image
              src={project.images[project.default_image_index]}
              alt={project.title}
              fill
              quality={75}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="hidden absolute bottom-0 group-hover:grid grid-cols-6 gap-4 bg-gray-700/50 p-4 w-full">
              {project.images.map((img, index) => (
                <div
                  onClick={() => handleImage({ project_id: project.id, index })}
                  key={index}
                  className="cursor-pointer bg-cover bg-center bg-no-repeat p-4 md:p-6 lg:p-10 rounded-3xl border-[#d9edf9] border"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default AnimatedProjects;
