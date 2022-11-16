import React from "react";
import Image from "next/legacy/image";
import { PORTFOLIO_ITEMS } from "../../../data/portfolio";
import { SiGithub } from "react-icons/si";

type CardProps = {
  title: string;
  description: string;
  image: string;
  github: string;
  link: string;
};

const Card = ({ title, description, image, github, link }: CardProps) => {
  return (
    <div className="flex flex-col dark:bg-slate-900 bg-white shadow-xl rounded-lg hover:-translate-y-1 transition-all duration-200 ease-in">
      <Image
        src={image}
        alt={title}
        width={1920}
        height={1080}
        layout="responsive"
      />
      <div className="mt-3 p-3 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
            >
              {title}
            </a>
          </h1>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-3xl"
            >
              <SiGithub className="inline-block mr-1" />
            </a>
          )}
        </div>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="dark:text-slate-300 text-slate-800 mt-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PORTFOLIO_ITEMS.map(
          ({ id, title, github, link, description, image }) => (
            <Card
              title={title}
              description={description}
              github={github}
              image={image}
              link={link}
              key={id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
