import React from "react";
import HeadingText from "./HeadingText";

const AboutMe = () => {
  return (
    <div className="border rounded-lg p-2 border-gray-700 max-w-4xl flex flex-col gap-4">
      <HeadingText title="About me" />
      <div className="text-white p-2 text-lg font-light">
        I&apos;m a junior Flutter developer and social media marketer passionate
        about building intuitive mobile apps and creating impactful digital
        campaigns. With a blend of technical expertise and creativity, I craft
        seamless user experiences. Explore my portfolio to see my projects and
        skills in action. Let&apos;s collaborate and bring innovative ideas to
        life!
      </div>
    </div>
  );
};

export default AboutMe;
