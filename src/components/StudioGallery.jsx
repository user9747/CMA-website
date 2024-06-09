import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Nav from "./Nav";
function StudioGallery({ pathname }) {
  return (
    <div className="h-full w-full animate-fade">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 h-full w-full gap-1"
        id="home-grid"
      >
        <div className="h-full w-full relative">
          <StaticImage
            src="../images/gallery/studio/DESKTOP/1.jpg"
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
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1">
          <nav className="p-4 sm:p-8 h-full w-full bg-black">
            <Nav pathname={pathname} />
          </nav>
          <StaticImage
            src="../images/gallery/studio/DESKTOP/2.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            loading="lazy"
            formats={["auto", "webp"]}
          />
          <StaticImage
            src="../images/gallery/studio/DESKTOP/3.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            loading="lazy"
            formats={["auto", "webp"]}
            className="col-span-2"
          />
        </div>
      </div>
    </div>
  );
}

export default StudioGallery;
