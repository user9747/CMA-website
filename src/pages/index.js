import React from "react";
import HomeGallery from "../components/HomeGallery";
import { SEO } from "../components/SEO";

const IndexPage = () => {
  return (
    <main className="w-full h-full bg-black font-light">
      <HomeGallery />
    </main>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
