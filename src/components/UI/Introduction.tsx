/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "../links/Link";

import { SiDevdotto, SiGithub, SiLinkedin } from "react-icons/si";

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
      <p className="mt-6 text-slate-800 dark:text-slate-300 leading-8 text-center md:text-lg">
        As a software engineer, my passion lies in creating practical solutions
        for real-life problems. I possess a deep enthusiasm for innovation,
        utilizing my expertise to develop remarkable products that drive
        positive change.
      </p>
      <div className="grid grid-cols-3 gap-5 mt-6">
        {socialLinks.map((link, index) => (
          <Link href={link.href} key={index} className="flex items-center">
            <span className="mr-2 text-xl">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
