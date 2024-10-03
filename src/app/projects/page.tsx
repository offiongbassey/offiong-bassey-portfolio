"use client";

import UnanimatedProjects from "@/components/project/UnanimatedProjects";
import WorkDone from "@/components/WorkDone";
import { PROJECTS, ProjectType } from "@/context/ProjectData";
import { useCallback, useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState<ProjectType[]>(PROJECTS);

  const handleImage = useCallback(({ project_id, index }: { project_id: string, index: number }) => {
    setProjects((prevProjects) => 
      prevProjects.map((project) => 
        project.id === project_id && project.default_image_index !== index 
      ? {...project, default_image_index: index }
      : project
      )
    )
  }, [setProjects]);

  return (
    <section className="padding-container project max-container my-10 md:my-20">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
       <WorkDone />
      </div>
      <UnanimatedProjects projects={projects} handleImage={handleImage} />
    </section>
  );
};

export default Page;
