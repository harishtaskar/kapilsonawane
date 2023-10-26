import React from "react";
import HeadingText from "./HeadingText";
import Image from "next/image";
import thumbnail from "@/public/assets/tornittos.png";
import Link from "next/link";

const MyProjects = [
  {
    id: "p1",
    title: "Tornitto's Pizza",
    link: "https://tornittos.vercel.app",
    thumbnail: thumbnail,
    description:
      "Indulge in a slice of heaven at [Pizza Place Name]! Our newly launched website brings the delightful world of our pizzeria right to your fingertips. Explore our menu packed with mouthwatering pizza varieties, from classic Margheritas to exotic gourmet combinations.",
    usedTechnology: [
      "Next js",
      "Tailwind Css",
      "MongoDB",
      "Mongoose",
      "Express",
    ],
  },
];

const Projects = () => {
  return (
    <div className="border rounded-lg py-4 pb-6 border-gray-700 max-w-4xl flex flex-col gap-6">
      <HeadingText title="Projects" />
      <ul className="bg-gray-800 text-white">
        {MyProjects.map((item) => {
          return (
            <li key={item.id} className="flex sm:flex-row flex-col gap-4">
              <Image
                width={300}
                height={300}
                alt={item.title}
                src={item.thumbnail}
                className="sm:flex-1 w-full"
              />
              <div className="flex flex-col py-2 gap-1 sm:flex-1 p-4 sm:p-1 sm:py-4">
                <span className="text-2xl font-medium">{item.title}</span>
                <p className="text-sm text-gray-200">{item.description}</p>
                <Link href={item.link} className="text-blue-500 font-medium">
                  {item.link}
                </Link>
                <div className="flex flex-col gap-1 flex-wrap">
                  <span className="text-lg font-semibold">Technology used</span>
                  <ul className="flex gap-2 flex-wrap">
                    {item.usedTechnology.map((tech, index) => {
                      return (
                        <li
                          key={index}
                          className="px-2 w-fit py-0.5 text-white border border-gray-700 rounded-full cursor-pointer"
                        >
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
