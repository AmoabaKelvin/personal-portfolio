import {
  SiAmazonaws,
  SiDjango,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";

import { FaJava, FaNodeJs } from "react-icons/fa";
import { TbBrandGoogleBigQuery } from "react-icons/tb";

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
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Google BigQuery",
    icon: <TbBrandGoogleBigQuery />,
  },
  {
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    name: "React JS",
    icon: <SiReact />,
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs />,
  },
  {
    name: "Django",
    icon: <SiDjango />,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs />,
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
    name: "AWS",
    icon: <SiAmazonaws />,
  },
];
const Skills = () => {
  return (
    <div className="dark:text-slate-300 text-slate-800 mt-8">
      <h1 className="text-3xl font-bold mb-4">Technical Skills</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <span key={index} className="flex items-center gap-1 px-2 py-1">
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
