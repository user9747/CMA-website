import React from "react";
import ContactUsGallery from "../components/ContactUsGallery";
import { SEO } from "../components/SEO";

const ContactPage = ({ location }) => {
  return (
    <main className="w-full h-full bg-white font-light font-Poppins animate-bg">
      <ContactUsGallery pathname={location.pathname} />
    </main>
  );
};

export default ContactPage;

export const Head = () => <SEO />;
