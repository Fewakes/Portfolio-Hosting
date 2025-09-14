"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            url={project.url}
            projectUrl={project.projectUrl ?? undefined}
            tags={project.tags as readonly string[]}
          />
        ))}

        <p className="text-center text-gray-500 italic mt-8">and more...</p>
      </div>
    </section>
  );
}
