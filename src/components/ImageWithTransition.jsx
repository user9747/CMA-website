import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function ImageWithTransition({
  image1,
  image2,
  id1,
  id2,
  textData1,
  textData2,
  onClick,
}) {
  return (
    <div className="w-full h-full relative overflow-hidden cursor-pointer">
      <div
        id={id1}
        className="absolute top-0 left-0 h-full w-full"
        onClick={() => onClick(textData1, image1)}
      >
        <div className="relative h-full w-full">
          <GatsbyImage
            image={image1}
            alt={textData2?.title}
            className="h-full w-full"
          />
          <div className="w-full flex justify-between items-end absolute bottom-0 left-0 text-white">
            <div className="font-medium sm:font-semibold bg-black bg-opacity-10 text-[0.8rem] sm:text-base leading-3 sm:leading-5 drop-shadow-lg p-1">
              {textData1?.title}
            </div>
            <div className="sm:font-medium bg-black bg-opacity-10 text-right text-[0.7rem] sm:text-sm leading-3 sm:leading-5 drop-shadow-lg p-1">
              {textData1?.desc}
            </div>
          </div>
        </div>
      </div>
      <div
        id={id2}
        className="absolute top-0 left-0 h-full w-full"
        onClick={() => onClick(textData1, image2)}
      >
        <div className="relative h-full w-full">
          <GatsbyImage
            image={image2}
            alt={textData2?.title}
            className="h-full w-full"
          />
          <div className="w-full flex justify-between items-end absolute bottom-0 left-0 text-white">
            <div className="font-medium sm:font-semibold bg-black bg-opacity-10 text-[0.8rem] sm:text-base leading-3 sm:leading-5 drop-shadow-lg p-1">
              {textData2?.title}
            </div>
            <div className="sm:font-medium bg-black bg-opacity-10 text-right text-[0.7rem] sm:text-sm leading-3 sm:leading-5 drop-shadow-lg p-1">
              {textData2?.desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageWithTransition;
