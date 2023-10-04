import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import { gsap } from "gsap";
import ImageWithTransition from "./ImageWithTransition";
function ProjectsGallery() {
  const [rectangleOneImage1Count, setRectangleOneImage1Count] = useState(0);
  const [rectangleOneImage2Count, setRectangleOneImage2Count] = useState(0);
  const [squareOneImage1Count, setSquareOneImage1Count] = useState(0);
  const [squareOneImage2Count, setSquareOneImage2Count] = useState(0);
  const comp = useRef();
  const allImages = useStaticQuery(graphql`
    {
      rects: allFile(
        sort: { name: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { regex: "/projects/RECTANGLES/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      squares: allFile(
        sort: { name: ASC }
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { regex: "/projects/SQUARES/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  console.log(allImages);

  useEffect(() => {
    let ctx = gsap.context(() => {
      //  First Reactangle Animation
      let tl = gsap.timeline({
        delay: 0,
        repeat: -1,
        defaults: {
          duration: 1.3,
          ease: "power4.out",
          delay: 0,
        },
      });
      tl.to("#rect-image-2", {
        y: "-100%",
        opacity: 0,
        duration: 0,
        delay: 1,
        onComplete: (a) => {
          setRectangleOneImage2Count((c) =>
            allImages.rects?.edges?.length > c + 2 ? c + 2 : 0
          );
          setSquareOneImage2Count((c) =>
            allImages.squares?.edges?.length > c + 3 ? c + 3 : 0
          );
        },
      }).to("#rect-image-2", {
        opacity: 1,
        y: 0,
        onComplete: (a) => {
          setRectangleOneImage1Count((c) =>
            allImages.rects?.edges?.length > c + 2 ? c + 2 : 0
          );
          setSquareOneImage1Count((c) =>
            allImages.squares?.edges?.length > c + 3 ? c + 3 : 0
          );
        },
        delay: 3,
      });

      //  suqre
      // let stl = gsap.timeline({
      //   delay: 0,
      //   repeat: -1,
      //   defaults: {
      //     duration: 1,
      //     ease: "power2.inOut",
      //     delay: 0,
      //   },
      // });
      // tl.to("#sqr-image-2", {
      //   y: "-100%",
      //   opacity: 0,
      //   duration: 0,
      //   delay: 1,
      //   onComplete: (a) => {
      //     setSquareOneImage2Count((c) => c + 3);
      //   },
      // }).to("#sqr-image-2", {
      //   opacity: 1,
      //   y: 0,
      //   onComplete: (a) => {
      //     setSquareOneImage1Count((c) => c + 3);
      //   },
      //   delay: 3,
      // });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, [allImages]);

  console.log(rectangleOneImage1Count, rectangleOneImage2Count);

  return (
    <div className="h-full w-full" ref={comp}>
      {/* <div className="w-full h-full relative">
        <div id="rect-image-1" className="absolute top-0 left-0 h-full w-full">
          <GatsbyImage
            image={
              allImages.rects?.edges?.[rectangleOneImage1Count]?.node
                .childImageSharp.gatsbyImageData
            }
            alt="hhhh"
          />
        </div>
        <div id="rect-image-2" className="absolute top-0 left-0 h-full w-full">
          <GatsbyImage
            image={
              allImages.rects?.edges?.[rectangleOneImage2Count]?.node
                .childImageSharp.gatsbyImageData
            }
            alt="hhhh"
          />
        </div>
      </div> */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 h-full w-full gap-1"
        id="home-grid"
      >
        <div className="grid grid-cols-1 grid-rows-2 h-full w-full gap-1">
          <ImageWithTransition
            id1="rect-image-1"
            id2="rect-image-2"
            image1={
              allImages.rects?.edges?.[rectangleOneImage1Count]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allImages.rects?.edges?.[rectangleOneImage2Count]?.node
                .childImageSharp.gatsbyImageData
            }
          />
          <ImageWithTransition
            id1="rect-image-1"
            id2="rect-image-2"
            image1={
              allImages.rects?.edges?.[rectangleOneImage1Count + 1]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allImages.rects?.edges?.[rectangleOneImage2Count + 1]?.node
                .childImageSharp.gatsbyImageData
            }
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1">
          <nav className="p-4 sm:p-8 h-full w-full bg-black">
            <Nav />
          </nav>
          <ImageWithTransition
            id1="rect-image-1"
            id2="rect-image-2"
            image1={
              allImages.squares?.edges?.[squareOneImage1Count]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allImages.squares?.edges?.[squareOneImage2Count]?.node
                .childImageSharp.gatsbyImageData
            }
          />
          <ImageWithTransition
            id1="rect-image-1"
            id2="rect-image-2"
            image1={
              allImages.squares?.edges?.[squareOneImage1Count + 1]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allImages.squares?.edges?.[squareOneImage2Count + 1]?.node
                .childImageSharp.gatsbyImageData
            }
          />
          <ImageWithTransition
            id1="rect-image-1"
            id2="rect-image-2"
            image1={
              allImages.squares?.edges?.[squareOneImage1Count + 2]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allImages.squares?.edges?.[squareOneImage2Count + 2]?.node
                .childImageSharp.gatsbyImageData
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsGallery;
