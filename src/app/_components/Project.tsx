"use client";

import Button from "@/components/Button";
import { PROJECTS } from "@/context/ProjectData";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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
    };
  }, []);

  const handleImage = ({
    project_id,
    index,
  }: {
    project_id: string;
    index: number;
  }) => {
    const updatedProjects = projects.map((project) =>
      project.id === project_id
        ? { ...project, default_image_index: index }
        : project
    );
    setProjects(updatedProjects);
  };

  return (
    <section className="project max-container my-2 md:my-10">
      <div className=" padding-container flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center justify-start">
          <div>
            <h2 className="font-motion text-5xl md:text-8xl bg-gradient-to-br from-orange-300 via-green-300 to-blue-300 bg-clip-text text-transparent">
              WORK <br />
              DONE
            </h2>
            <p className="text-medium italic">
              These are some of the works I&apos;ve done so far.
            </p>
          </div>
          <Image
            src="/tree.png"
            className="-rotate-12"
            alt="works"
            width={100}
            height={100}
          />
        </div>
        <Button type="button" variant="primary" className="hidden hover:text-black bg-black dark:hover:text-white text-white hover:bg-transparent md:block h-14 md:h-20 w-32 md:w-80">
          Explore All
        </Button>
      </div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-row group px-4 md:px-0 flex flex-col md:flex-row ${
            index % 2 && "md:flex-row-reverse"
          } gap-4 md:gap-72 md:justify-between my-10 md:my-32 md:items-center`}
        >
          {/* Medium and large screen with animation */}
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
                <Button type="button" variant="primary" className="hover:text-black bg-black dark:hover:text-white text-white hover:bg-transparent">
                  View Project
                </Button>
              </Link>
            </div>
          </div>
          <div
            className={`hidden project-right md:flex items-end justify-between overflow-hidden bg-cover bg-center bg-no-repeat w-full md:w-[70%] md:h-[250px] lg:h-[450px] rounded-3xl transition-all duration-700`}
            style={{
              backgroundImage: `url(${
                project.images[project.default_image_index]
              })`,
            }}
          >
            <div className="hidden group-hover:grid grid-cols-6 gap-4 bg-gray-700/50 p-4 w-full">
              {project.images.map((img, index) => (
                <div
                  onClick={() =>
                    handleImage({ project_id: project.id, index })
                  }
                  key={index}
                  className="cursor-pointer bg-cover bg-center bg-no-repeat md:p-6 lg:p-10 rounded-3xl border-[#d9edf9] border-2"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          </div>
          {/* small screen without animation */}
          <div
            className={`flex md:hidden items-end justify-between overflow-hidden bg-cover bg-center bg-no-repeat w-full md:w-[70%] h-[200px] md:h-[450px] rounded-3xl transition-all duration-700`}
            style={{
              backgroundImage: `url(${
                project.images[project.default_image_index]
              })`,
            }}
          >
            <div className="hidden group-hover:grid grid-cols-6 gap-2 md:gap-4 bg-gray-700/50 p-4 w-full">
              {project.images.map((img, index) => (
                <div
                  onClick={() =>
                    handleImage({ project_id: project.id, index })
                  }
                  key={index}
                  className="cursor-pointer bg-cover bg-center bg-no-repeat h-8 md:p-10 rounded-3xl border-[#d9edf9] border-2"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          </div>
           <div
            className={`md:hidden w-full md:w-[30%] card-down ${
              index % 2 ? "text-left" : "text-left md:text-right"
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold">{project.title}</h2>
            <p>{project.description}</p>
            <div
              className={`flex items-center ${
                index % 2 ? "justify-start" : "justify-start md:justify-end"
              } py-4`}
            >
              <Link href={project.link} target="_blank">
                <Button type="button" variant="primary" className="hover:text-black bg-black dark:hover:text-white text-white hover:bg-transparent">
                  View Project
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
      ))}
        <div className="md:hidden flex items-center justify-center">
            <Button type="button" variant="primary" className="h-14 md:h-20 w-32 md:w-80 hover:text-black bg-black dark:hover:text-white text-white hover:bg-transparent">
              Explore All
            </Button>
        </div>
      <div className="padding-container mt-10 text-center flex justify-center flex-col items-center">
        <h4 className="text-3xl md:text-5xl font-semibold py-4 bg-gradient-to-r dark:from-green-300 dark:to-purple-300 from-green-800 to-purple-800 bg-clip-text text-transparent">Wow! You&apos;ve reached this part?</h4>
        <p className="text-medium md:text-3xl font-[600] w-full md:max-w-[710px] dark:bg-gradient-to-tr from-[#f6f3d2] via-green-50 to-purple-50 bg-clip-text dark:text-transparent text-gray-600">
        I appreciate your time and visit. I&apos;m open to collaborating, learning and building. Hit me up <span className="text-white">🙇‍♂️</span> <Link href="mailto:offiongbassidev@gmail.com" target="_blank">offiongbassidev@gmail.com</Link> </p>
      </div>
    </section>
  );
};

export default ProjectSection;
