/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "../../../data/portfolio";
// import Image from "next/image";

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
      <img src={image} alt="Hello" className="w-full h-60" />
      <div className="mt-3 p-3 py-4">
        <h1 className="text-2xl">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
        <p className="mt-4">{description}</p>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-slate-300 px-2 text-black rounded mt-4"
        >
          Github
        </a>
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
