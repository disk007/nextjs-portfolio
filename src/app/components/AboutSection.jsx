"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  // FaPhp,
  // FaPython
} from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiPostman, SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";
import { FaPhp, FaPython, FaGithub } from "react-icons/fa";
import { DiDotnet, DiMsqlServer } from "react-icons/di";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
const Frameworks = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "ASP.NET Core", icon: <SiDotnet /> },
  { name: "Angular", icon: <FaAngular /> },
];
const Languages = [
  { name: "PHP", icon: <FaPhp /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C#", icon: <DiDotnet /> },
  { name: "JavaScript", icon: <RiJavascriptFill /> },
];

const Other = [
  { name: "Github", icon: <FaGithub /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "Postman", icon: <SiPostman /> },
]

const Databases = [
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQL Server", icon: <DiMsqlServer /> },
]

const TAB_DATA = [
  {
    title: "Languages",
    id: "Languages",
    content: (
      <div className="flex flex-wrap gap-3">
        {Languages.map((lang) => (
          <span
            key={lang.name}
            className="
         flex items-center gap-2
          px-4 py-2 rounded-lg
          bg-blue-400/10
          text-blue-300
          text-sm font-medium
          hover:bg-blue-400/20
          transition
        "
          >
            <span className="text-lg">{lang.icon}</span>
            {lang.name}
          </span>
        ))}
      </div>
    ),

  },
  {
    title: "Databases",
    id: "databases",
    content: (
      <div className="flex flex-wrap gap-3">
        {Databases.map((f) => (
          <span
            key={f.name}
            className="
          flex items-center gap-2
          px-4 py-2 rounded-lg
          bg-blue-400/10
          text-blue-300
          text-sm font-medium
          hover:bg-blue-400/20
          transition
        "
          >
            <span className="text-lg">
              {f.icon}
            </span>
            {f.name}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Frameworks",
    id: "Frameworks",
    content: (
      <div className="flex flex-wrap gap-3">
        {Frameworks.map((f) => (
          <span
            key={f.name}
            className="
          flex items-center gap-2
          px-4 py-2 rounded-lg
          bg-blue-400/10
          text-blue-300
          text-sm font-medium
          hover:bg-blue-400/20
          transition
        "
          >
            <span className="text-lg">
              {f.icon}
            </span>
            {f.name}
          </span>
        ))}
      </div>
    ),



  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="pl-3 border-l-4 border-cyan-500">
        <div className="flex flex-wrap justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-100">
            Rajamangala University of Technology Isan
          </h3>
          <span className="text-sm text-gray-400">
            2022 – 2025
          </span>
        </div>

        <p className="mt-2 text-blue-300 font-medium">
          Bachelor of Science in Computer Science
        </p>
      </div>

    ),
  },
  {
    title: "Other",
    id: "Other",
    content: (
      <div className="flex flex-wrap gap-3">
        {Other.map((f) => (
          <span
            key={f.name}
            className="
          flex items-center gap-2
          px-4 py-2 rounded-lg
          bg-blue-400/10
          text-blue-300
          text-sm font-medium
          hover:bg-blue-400/20
          transition
        "
          >
            <span className="text-lg">
              {f.icon}
            </span>
            {f.name}
          </span>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-32 xl:px-16">
        <Image src="/images/about.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Full Stack Web Developer with a strong foundation in both JavaScript (React, Node.js) and .NET ecosystems (ASP.NET Core). Experienced in designing and building scalable, responsive web applications and integrating RESTful APIs.
            Passionate about delivering clean code and optimizing system performance, ready to contribute immediately to dynamic development teams.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Languages")}
              active={tab === "Languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Frameworks")}
              active={tab === "Frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("databases")}
              active={tab === "databases"}
            >
              {" "}
              Databases{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Other")}
              active={tab === "Other"}
            >
              {" "}
              Other{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
