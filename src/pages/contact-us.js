import React from "react";
import ContactUsGallery from "../components/ContactUsGallery";
import { SEO } from "../components/SEO";

const ContactPage = () => {
  return (
    <main className="w-full h-full bg-white font-light font-Poppins">
      <ContactUsGallery />
    </main>
  );
};

export default ContactPage;

export const Head = () => <SEO />;
