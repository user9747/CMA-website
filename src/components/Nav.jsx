import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function Nav() {
  return (
    <div className="h-full w-full">
      <Link to="/">
        <StaticImage
          src="../images/cma.png"
          alt="A dinosaur"
          placeholder="blurred"
          loading="lazy"
          formats={["auto", "webp"]}
          className="w-[4rem] sm:w-[9rem] ml-auto sm:ml-0 block"
        />
      </Link>
      <ol className="text-white flex flex-col items-end sm:items-start gap-2.5 sm:gap-3 text-xs sm:text-lg sm:text-[1.7rem] mt-7 sm:mt-14">
        <li>
          <Link to="/">PROJECTS</Link>
        </li>
        <li>
          <Link to="/studio">STUDIO</Link>
        </li>
        <li>
          <Link to="/contact-us">CONTACT</Link>
        </li>
        <li>
          <Link to="/insights">INSIGHTS</Link>
        </li>
      </ol>
    </div>
  );
}

export default Nav;
