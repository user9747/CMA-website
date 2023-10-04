import React from "react";
import StudioGallery from "../components/StudioGallery";
import { SEO } from "../components/SEO";

const StudioPage = () => {
  return (
    <main className="w-full h-full bg-white font-light font-Poppins">
      <StudioGallery />
    </main>
  );
};

export default StudioPage;

export const Head = () => <SEO />;
