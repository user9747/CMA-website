import React from "react";
import Nav from "./Nav";
function InsightsGallery({ pathname }) {
  return (
    <div className="h-full w-full">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 h-full w-full gap-1"
        id="home-grid"
      >
        <div className="bg-black flex items-center justify-center w-full h-full">
          <div className="w-[90%] sm:w-[90%] text-white text-xs sm:text-xl sm:leading-6">
            OUR MISSION IS TO TRANSFORM DESIGN DREAMS INTO TANGIBLE REALITIES;
            MAKING SPACES THAT NOT ONLY STAND AS A TESTAMENT TO INNOVATION BUT
            ALSO TO ENHANCE THE QUALITY OF LIFE WITH A TEAM OF VISIONARY
            ARCHITECTS, TECHNOCRATS AND A PASSION FOR SUSTAINABLE, AESTHETICALLY
            PLEASING FUNCTIONAL DESIGNS.
            <br /> <br />
            WE ARE IN A JOURNEY THAT TRANSCENDS CONVENTIONAL BOUNDARIES AND
            EXPLORE THE UNLIMITED POSSIBILITIES OF ARCHITECTURE; BEYOND
            AESTHETICS WITH A MEANINGFUL IMPACT ON PEOPLE AND LIVES. WE LET OUR
            SOLUTIONS TO BECOME CATALYSTS FOR POSITIVE CHANGE.
            <br /> <br />
            OUR AIM IS TO MAKE SPACES THAT NOT ONLY FUNCTION SEAMLESSLY BUT ALSO
            EXUDE BEAUTY AND HARMONY......A SOURCE OF INSPIRATION AND JOY.
            <br /> <br />
            WE TRY TO CRAFT NARRATIVES OF DESIGNS WITH MATERIALS, COLOURS AND
            SPATIAL ARRANGEMENT TO ARRIVE AT MAKING SMART BUILDINGS.
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1">
          <nav className="p-4 sm:p-8 h-full w-full bg-black">
            <Nav pathname={pathname} />
          </nav>
          <div className="bg-black flex items-center justify-center w-full h-full row-span-2 sm:row-span-1">
            <div className="w-[90%] sm:w-[90%] text-white text-xs sm:text-xl sm:leading-6">
              OUR TEAM IS CONSTANTLY PUSHING THE BOUNDARIES OF INNOVATIONS
              MAXIMISING THE ACCESSIBILITY TO ALL.
              <br /> <br />
              WE RECOGNISE THAT THE BEST DESIGNS COME FROM COLLABORATIVE EFFORTS
              WITH CLIENTS, COMMUNITIES AND PARTNERS.
              <br /> <br />
              WE BELIEVE THAT THE DELIGHTNESS PLAYS A MAJOR ROLE IN DESIGNS.
            </div>
          </div>
          <div className="bg-black w-full h-full"></div>
          <div className="bg-black w-full h-full hidden sm:flex"></div>
        </div>
      </div>
    </div>
  );
}

export default InsightsGallery;
