import React from "react";

const HeadingText = ({ title }: { title: string }) => {
  return (
    <h1 className="sm:text-5xl text-4xl text-center grid mb-0 text-white no-underline hover:text-gray-100 font-sans font-extrabold">
      {title}
    </h1>
  );
};

export default HeadingText;
