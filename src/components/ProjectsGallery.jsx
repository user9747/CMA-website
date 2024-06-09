import { Link, graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { animate } from "../utils/anim";
import ImageWithTransition from "./ImageWithTransition";
import Nav from "./Nav";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
function ProjectsGallery({ pathname }) {
  const [rectangleOneImage1Count, setRectangleOneImage1Count] = useState(0);
  const [rectangleOneImage2Count, setRectangleOneImage2Count] = useState(0);
  const [squareOneImage1Count, setSquareOneImage1Count] = useState(0);
  const [squareOneImage2Count, setSquareOneImage2Count] = useState(0);
  const [selectedProject, setSelectedProject] = useState();
  const comp = useRef();
  const sqrTlRef = useRef();
  const rectTlRef = useRef();
  const allData = useStaticQuery(graphql`
    {
      rectData: allProjectNamesWithDescXlsxRectangle {
        edges {
          node {
            title
            desc
          }
        }
      }
      sqrData: allProjectNamesWithDescXlsxSquare {
        edges {
          node {
            title
            desc
          }
        }
      }
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

  useEffect(() => {
    let ctx = gsap.context(() => {
      // rectangle image
      rectTlRef.current = animate({
        id: "#rect-image-2",
        onAddImage: () => {
          setRectangleOneImage2Count((c) =>
            allData.rects?.edges?.length > c + 2 ? c + 2 : 0
          );
        },
        onSlideImage: () => {
          setRectangleOneImage1Count((c) =>
            allData.rects?.edges?.length > c + 2 ? c + 2 : 0
          );
        },
      });

      // square image
      sqrTlRef.current = animate({
        id: "#sqr-image-2",
        onAddImage: () => {
          setSquareOneImage2Count((c) =>
            allData.squares?.edges?.length > c + 3 ? c + 3 : 0
          );
        },
        onSlideImage: () => {
          setSquareOneImage1Count((c) =>
            allData.squares?.edges?.length > c + 3 ? c + 3 : 0
          );
        },
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, [allData]);

  const onClick = (textData, image) => {
    setSelectedProject({
      textData,
      image,
    });
    sqrTlRef.current?.pause();
    rectTlRef.current?.pause();
  };

  const onClose = () => {
    setSelectedProject(undefined);
    sqrTlRef.current?.play();
    rectTlRef.current?.play();
  };

  return (
    <div className="h-full w-full animate-fade" ref={comp}>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 h-full w-full gap-1"
        id="home-grid"
      >
        <div className="grid grid-cols-1 grid-rows-2 h-full w-full gap-1">
          <ImageWithTransition
            onClick={onClick}
            id1="rect-image-1"
            id2="rect-image-2"
            image1={
              allData.rects?.edges?.[rectangleOneImage1Count]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allData.rects?.edges?.[rectangleOneImage2Count]?.node
                .childImageSharp.gatsbyImageData
            }
            textData1={
              allData?.rectData?.edges?.[rectangleOneImage1Count]?.node
            }
            textData2={
              allData?.rectData?.edges?.[rectangleOneImage2Count]?.node
            }
          />
          <ImageWithTransition
            onClick={onClick}
            id1="rect-image-1"
            id2="rect-image-2"
            image1={
              allData.rects?.edges?.[rectangleOneImage1Count + 1]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allData.rects?.edges?.[rectangleOneImage2Count + 1]?.node
                .childImageSharp.gatsbyImageData
            }
            textData1={
              allData?.rectData?.edges?.[rectangleOneImage1Count + 1]?.node
            }
            textData2={
              allData?.rectData?.edges?.[rectangleOneImage2Count + 1]?.node
            }
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1">
          <nav className="p-4 sm:p-8 h-full w-full bg-black">
            <Nav pathname={pathname} />
          </nav>
          <ImageWithTransition
            onClick={onClick}
            id1="rect-image-1"
            id2="sqr-image-2"
            image1={
              allData.squares?.edges?.[squareOneImage1Count]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allData.squares?.edges?.[squareOneImage2Count]?.node
                .childImageSharp.gatsbyImageData
            }
            textData1={allData?.sqrData?.edges?.[squareOneImage1Count]?.node}
            textData2={allData?.sqrData?.edges?.[squareOneImage2Count]?.node}
          />
          <ImageWithTransition
            onClick={onClick}
            id1="rect-image-1"
            id2="sqr-image-2"
            image1={
              allData.squares?.edges?.[squareOneImage1Count + 1]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allData.squares?.edges?.[squareOneImage2Count + 1]?.node
                .childImageSharp.gatsbyImageData
            }
            textData1={
              allData?.sqrData?.edges?.[squareOneImage1Count + 1]?.node
            }
            textData2={
              allData?.sqrData?.edges?.[squareOneImage2Count + 1]?.node
            }
          />
          <ImageWithTransition
            onClick={onClick}
            id1="rect-image-1"
            id2="sqr-image-2"
            image1={
              allData.squares?.edges?.[squareOneImage1Count + 2]?.node
                .childImageSharp.gatsbyImageData
            }
            image2={
              allData.squares?.edges?.[squareOneImage2Count + 2]?.node
                .childImageSharp.gatsbyImageData
            }
            textData1={
              allData?.sqrData?.edges?.[squareOneImage1Count + 2]?.node
            }
            textData2={
              allData?.sqrData?.edges?.[squareOneImage2Count + 2]?.node
            }
          />
        </div>
      </div>
      {selectedProject && (
        <div className="fixed left-0 top-0 w-full h-full bg-black flex flex-col items-center justify-center">
          <div
            className="absolute top-5 right-5 z-50 text-lg sm:text-3xl font-medium cursor-pointer p-2 rounded-full bg-slate-500 bg-opacity-50 shrink-0 w-12 h-12 flex items-center justify-center"
            onClick={onClose}
          >
            X
          </div>
          <Link
            to="/"
            className=" absolute left-1/2 -translate-x-1/2 top-5 z-30 bg-slate-500 bg-opacity-50 p-2 rounded-md"
          >
            <StaticImage
              src="../images/cma.png"
              alt="CMA"
              placeholder="blurred"
              loading="lazy"
              formats={["auto", "webp"]}
              className="w-[4rem] sm:w-[9rem]"
            />
          </Link>
          <GatsbyImage
            image={selectedProject.image}
            alt={selectedProject?.title}
            className="max-w-full"
          />
          <div className="w-full flex justify-between bottom-0 left-0 text-white">
            <div className="font-medium sm:font-semibold bg-black bg-opacity-10 text-[0.9rem] sm:text-xl leading-3 sm:leading-5 drop-shadow-lg p-1">
              {selectedProject?.textData?.title}
            </div>
            <div className="sm:font-medium bg-black bg-opacity-10 text-right text-[0.8rem] sm:text-base leading-3 sm:leading-5 drop-shadow-lg p-1">
              {selectedProject?.textData?.desc}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsGallery;
