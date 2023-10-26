import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  let heigthWidth = 35;
  return (
    <nav className="bg-white bg-opacity-40 backdrop-blur backgr p-4 sticky top-0 drop-shadow-sm z-10">
      <div className="prose prose-xl mx-auto flex flex-col justify-between sm:flex-row gap-4">
        <h1 className="sm:text-5xl text-4xl text-center grid mb-0 font-[900]">
          <Link
            href={"/"}
            className="text-white no-underline hover:text-gray-100 font-sans font-extrabold"
          >
            Kapil Sonalwane
          </Link>
        </h1>
        <div
          className={`flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white sm:text-2xl text-xl lg:text-4xl `}
        >
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.github.com/"
          >
            <SocialIcon
              as="div"
              network="github"
              style={{ width: `${heigthWidth}px`, height: `${heigthWidth}px` }}
            />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://instagram.com/"
          >
            <SocialIcon
              as="div"
              network="instagram"
              style={{ width: `${heigthWidth}px`, height: `${heigthWidth}px` }}
            />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://twitter.com/"
          >
            <SocialIcon
              as="div"
              network="twitter"
              style={{ width: `${heigthWidth}px`, height: `${heigthWidth}px` }}
            />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://linkedin.com/"
          >
            <SocialIcon
              as="div"
              network="linkedin"
              style={{ width: `${heigthWidth}px`, height: `${heigthWidth}px` }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
