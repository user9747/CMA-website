import React from "react";
import ProjectsGallery from "../components/ProjectsGallery";
import { SEO } from "../components/SEO";

const ProjectsPage = ({ location }) => {
  return (
    <main className="w-full h-full bg-white font-light font-Poppins animate-bg">
      <ProjectsGallery pathname={location.pathname} />
    </main>
  );
};

export default ProjectsPage;

export const Head = () => <SEO />;
