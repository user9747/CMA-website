import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function ImageWithTransition({ image1, image2, id1, id2 }) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div id={id1} className="absolute top-0 left-0 h-full w-full">
        <GatsbyImage image={image1} alt="hhhh" className="h-full w-full" />
      </div>
      <div id={id2} className="absolute top-0 left-0 h-full w-full">
        <GatsbyImage image={image2} alt="hhhh" className="h-full w-full" />
      </div>
    </div>
  );
}

export default ImageWithTransition;
