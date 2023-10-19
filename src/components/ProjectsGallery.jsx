import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { animate } from "../utils/anim";
import ImageWithTransition from "./ImageWithTransition";
import Nav from "./Nav";
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
      // rectangle image
      animate({
        id: "#rect-image-2",
        onAddImage: () => {
          setRectangleOneImage2Count((c) =>
            allImages.rects?.edges?.length > c + 2 ? c + 2 : 0
          );
        },
        onSlideImage: () => {
          setRectangleOneImage1Count((c) =>
            allImages.rects?.edges?.length > c + 2 ? c + 2 : 0
          );
        },
      });

      // square image
      animate({
        id: "#sqr-image-2",
        onAddImage: () => {
          setSquareOneImage2Count((c) =>
            allImages.squares?.edges?.length > c + 3 ? c + 3 : 0
          );
        },
        onSlideImage: () => {
          setSquareOneImage1Count((c) =>
            allImages.squares?.edges?.length > c + 3 ? c + 3 : 0
          );
        },
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, [allImages]);

  console.log(rectangleOneImage1Count, rectangleOneImage2Count);

  return (
    <div className="h-full w-full" ref={comp}>
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
            id2="sqr-image-2"
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
            id2="sqr-image-2"
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
            id2="sqr-image-2"
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
