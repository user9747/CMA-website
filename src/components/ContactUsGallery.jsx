// import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import Nav from "./Nav";
function ContactUsGallery() {
  return (
    <div className="h-full w-full absolute top-0 left-0">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 h-full w-full gap-1"
        id="home-grid"
      >
        <div className="h-full w-full relative">
          <StaticImage
            src="../images/gallery/contact/DESKTOP/1.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            loading="lazy"
            formats={["auto", "webp"]}
            className="h-full w-full"
          />
          <div
            className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-end"
            style={{
              background:
                "linear-gradient(180deg, rgba(39, 39, 39, 0.68) 14.58%, rgba(18, 18, 18, 0.00) 50.66%, rgba(0, 0, 0, 0.68) 73.96%)",
              backdropFilter: "blur(1px)",
            }}
          />
          <div className="text-white flex h-full w-full items-end justify-center absolute left-0 bottom-0">
            <div className="text-center text-[0.9rem] sm:text-[1.85rem] mb-1 sm:mb-4 w-max-[80%] font-light">
              C1, BELHAVEN GARDENS, KOWDIAR,TRIVANDRUM,
              <br />
              INDIA 695003, 0471-4053877
              <div className="mt-1 sm:mt-4">
                CHANDRAMOHANASSOCIATES@GMAIL.COM
              </div>
              <div className="mt-1 sm:mt-4">@CHANDRAMOHANASSOCIATES</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1">
          <nav className="p-4 sm:p-8 h-full w-full bg-black">
            <Nav />
          </nav>
          <StaticImage
            src="../images/gallery/contact/DESKTOP/2.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            loading="lazy"
            formats={["auto", "webp"]}
          />
          <div className="bg-black flex items-center justify-center w-full h-full">
            <div className="w-[80%] sm:w-[75%] text-white text-xs sm:text-xl font-light sm:leading-6">
              STARTED INDULGING IN DESIGN PRACTICE SINCE 1975, FOUNDED
              CHANDRAMOHAN ASSOCIATES IN 1984 AND THE JOURNEY GOES ON....
            </div>
          </div>
          <StaticImage
            src="../images/gallery/contact/DESKTOP/3.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            loading="lazy"
            formats={["auto", "webp"]}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUsGallery;
