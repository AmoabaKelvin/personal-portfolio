import React from "react";
import Link from "../links/Link";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiGit,
  SiHeroku,
  SiNetlify,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiBootstrap,
  SiSelenium,
} from "react-icons/si";

import { DiPostgresql } from "react-icons/di";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs />,
    },
    {
      name: "Python",
      icon: <SiPython />,
    },
    {
      name: "Django",
      icon: <SiDjango />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "HTML",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Linux",
      icon: <SiLinux />,
    },
    {
      name: "Git",
      icon: <SiGit />,
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      name: "Selenium",
      icon: <SiSelenium />,
    },
  ];

  return (
    <div className="dark:text-slate-300 text-slate-800 mt-8">
      <h1 className="text-3xl font-bold mb-4">Technical Skills</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <Link href="#" key={index} className="flex items-center gap-1">
            {skill.icon}
            {skill.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Skills;
