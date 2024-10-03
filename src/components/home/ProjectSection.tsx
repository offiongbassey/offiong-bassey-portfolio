"use client";

import Button from "@/components/Button";
import { PROJECTS, ProjectType } from "@/context/ProjectData";
import { useCallback, useState } from "react";
import Link from "next/link";
import Appreciation from "./Appreciation";
import WorkDone from "../WorkDone";
import AnimatedProjects from "../project/AnimatedProjects";
import UnanimatedProjects from "../project/UnanimatedProjects";

const Explore = ({ mobile }: { mobile?: boolean }) => {
  return (
    <Link href="/projects">
      <Button
        type="button"
        variant="primary"
        className={`${
          mobile ? "md:hidden" : "hidden md:block"
        } h-14 md:h-20 w-32 md:w-80 hover:text-black bg-black dark:hover:text-white text-white hover:bg-transparent`}
      >
        Explore All
      </Button>
    </Link>
  );
};

const ProjectSection = () => {
  const [projects, setProjects] = useState<ProjectType[]>(PROJECTS);

  const handleImage = useCallback(
    ({ project_id, index }: { project_id: string; index: number }) => {
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === project_id && project.default_image_index !== index
            ? { ...project, default_image_index: index }
            : project
        )
      );
    },
    [setProjects]
  );

  return (
    <section className="project max-container my-2 md:my-10">
      <div className="padding-container flex flex-col md:flex-row gap-4 items-center justify-between">
        <WorkDone />
        <Explore />
      </div>
      <div className="hidden md:block">
        <AnimatedProjects projects={projects} handleImage={handleImage} />
      </div>
      <div className="md:hidden">
        <UnanimatedProjects
          projects={projects.slice(0, 3)}
          handleImage={handleImage}
        />
      </div>
      <div className="flex items-center justify-center">
        <Explore mobile={true} />
      </div>
      <Appreciation />
    </section>
  );
};

export default ProjectSection;
