import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <main className="px-3 mx-auto flex flex-col items-center gap-8">
      <p className="mt-6 mb-6 text-xl sm:text-3xl text-center text-white font-sans">
        Hello and Welcome 👋🏻 &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Kapil</span>
        </span>
      </p>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <span className="text-sm text-gray-200 mt-8">
        all rights reserved ©kapil sonawane
      </span>
    </main>
  );
};

export default Home;
