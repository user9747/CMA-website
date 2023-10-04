import React from "react";
import ProjectsGallery from "../components/ProjectsGallery";
import { SEO } from "../components/SEO";

const ProjectsPage = () => {
  return (
    <main className="w-full h-full bg-white font-light font-Poppins">
      <ProjectsGallery />
    </main>
  );
};

export default ProjectsPage;

export const Head = () => <SEO />;
