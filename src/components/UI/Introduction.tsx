/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "../links/Link";

import { SiLinkedin, SiGithub, SiDevdotto } from "react-icons/si";

const Introduction = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      href: "https://www.linkedin.com/in/kelvinamoaba/",
    },
    {
      name: "Github",
      icon: <SiGithub />,
      href: "https://github.com/AmoabaKelvin",
    },
    {
      name: "Dev.to",
      icon: <SiDevdotto />,
      href: "https://dev.to/amoabakelvin",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <Image
        src="/images/profile3.png"
        width={200}
        height={200}
        className="rounded-full"
        alt="Kelvin Amoaba"
      />
      <h1 className="name mt-4 text-center">Kelvin Amoaba</h1>
      <p className="mt-3 text-slate-800 dark:text-slate-300 leading-8 text-center md:text-lg">
        I'm a software engineer based in Accra, Ghana. I'm passionate about
        building products that solve real world problems.
      </p>
      <div className="grid grid-cols-3 gap-5 mt-2">
        {socialLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="flex items-center gap-1"
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
