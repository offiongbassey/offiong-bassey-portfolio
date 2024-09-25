"use client";

import Button from "@/components/Button";
import { PROJECTS } from "@/context/ProjectData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState(PROJECTS);

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
    <section className="padding-container project max-container my-10 md:my-20">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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
      </div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`group flex flex-col md:flex-row ${
            index % 2 && "md:flex-row-reverse"
          } gap-4 md:gap-32 md:justify-between my-10 md:my-32 md:items-center`}
        >
          <div
            className={`w-full md:w-[30%] card-down ${
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
            className={`flex items-end justify-between overflow-hidden bg-cover bg-center bg-no-repeat w-full md:w-[70%] h-[200px] md:h-[250px] lg:h-[450px] rounded-3xl transition-all duration-700`}
            style={{
              backgroundImage: `url(${
                project.images[project.default_image_index]
              })`,
            }}
          >
            <div className="hidden group-hover:grid grid-cols-6 gap-4 bg-gray-700/50 p-4 w-full">
              {project.images.map((img, index) => (
                <div
                  onClick={() => handleImage({ project_id: project.id, index })}
                  key={index}
                  className="cursor-pointer bg-cover bg-center bg-no-repeat p-4 md:p-6 lg:p-10 rounded-3xl border-[#d9edf9] border-2"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Page;
