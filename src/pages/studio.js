import React from "react";
import StudioGallery from "../components/StudioGallery";
import { SEO } from "../components/SEO";

const StudioPage = ({ location }) => {
  return (
    <main className="w-full h-full bg-white font-light font-Poppins animate-bg">
      <StudioGallery pathname={location.pathname} />
    </main>
  );
};

export default StudioPage;

export const Head = () => <SEO />;
