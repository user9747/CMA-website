// import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import Nav from "./Nav";
function HomeGallery() {
  const comp = useRef();
  //   const data = useStaticQuery(graphql`
  //     {
  //       allFile(
  //         filter: {
  //           sourceInstanceName: { eq: "images" }
  //           relativeDirectory: { regex: "/gallery/home/DESKTOP/" }
  //         }
  //       ) {
  //         edges {
  //           node {
  //             name
  //             childImageSharp {
  //               gatsbyImageData
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `);
  //   console.log(data);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".opacity-animate", { opacity: 1, delay: 2, duration: 3 });
      gsap.to("#menu", { opacity: 1, delay: 5, duration: 3 });
      gsap.to("#menu-bg-image", { opacity: 0, delay: 5, duration: 3 });
    }, comp);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="h-full w-full absolute top-0 left-0" ref={comp}>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 h-full w-full gap-1">
        <div className="h-full w-full relative">
          <StaticImage
            src="../images/gallery/home/DESKTOP/1.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            loading="lazy"
            formats={["auto", "webp"]}
            className="h-full w-full opacity-0 opacity-animate"
          />
          <div
            className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-end opacity-0 opacity-animate"
            style={{
              background:
                "linear-gradient(180deg, rgba(39, 39, 39, 0.68) 14.58%, rgba(18, 18, 18, 0.00) 50.66%, rgba(0, 0, 0, 0.68) 73.96%)",
              backdropFilter: "blur(1px)",
            }}
          />
          <div className="text-white flex h-full w-full items-end justify-center absolute left-0 bottom-0">
            <div className="text-center text-[0.9rem] sm:text-[1.85rem] mb-2 sm:mb-4 w-max-[80%] font-light">
              A CONSTANT ENDEAVOR
              <br />
              IN MAKING SENSIBLE SPACES FOR BETTER LIVING.
              <div className="mt-2 sm:mt-4">THE QUEST GOES ON</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1 opacity-0 opacity-animate">
          <div className="h-full w-full relative">
            <div className="h-full w-full" id="menu-bg-image">
              <StaticImage
                src="../images/gallery/home/DESKTOP/2.jpg"
                alt="A dinosaur"
                placeholder="blurred"
                loading="lazy"
                formats={["auto", "webp"]}
                className="h-full w-full"
              />
            </div>
            <nav
              className="absolute top-0 left-0 p-4 sm:p-8 opacity-0 h-full w-full"
              id="menu"
            >
              <Nav />
            </nav>
          </div>
          <StaticImage
            src="../images/gallery/home/DESKTOP/4.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            loading="lazy"
            formats={["auto", "webp"]}
          />
          <StaticImage
            src="../images/gallery/home/DESKTOP/3.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            loading="lazy"
            formats={["auto", "webp"]}
          />

          <StaticImage
            src="../images/gallery/home/DESKTOP/5.jpg"
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

export default HomeGallery;
