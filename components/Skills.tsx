import React from "react";
import HeadingText from "./HeadingText";

const MySkills = [
  "Flutter",
  "Dart",
  "Social-Media Marketing",
  "Problem Solving",
  "Programming",
  "HTML",
  "CSS",
  "Web Development",
  "App Development",
  "Agge tu dekhlena",
];

const Skills = () => {
  return (
    <div className="border rounded-lg px-6 py-2 pb-4 border-gray-700 max-w-4xl w-4xl flex flex-col gap-6">
      <HeadingText title="My Skills" />
      <ul className="flex gap-2 flex-wrap">
        {MySkills.map((skill, index) => {
          return (
            <li
              key={index}
              className="px-4 py-1 text-white border border-gray-700 rounded-full hover:bg-white hover:text-black cursor-pointer"
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
