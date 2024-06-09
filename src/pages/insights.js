import React from "react";
import InsightsGallery from "../components/InsightsGallery";
import { SEO } from "../components/SEO";

const InsightsPage = ({ location }) => {
  return (
    <main className="w-full h-full bg-white font-light font-Poppins animate-bg">
      <InsightsGallery pathname={location.pathname} />
    </main>
  );
};

export default InsightsPage;

export const Head = () => <SEO />;
