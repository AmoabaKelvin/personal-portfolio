import React from "react";

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const Link = ({ href, className, children }: LinkProps) => {
  return (
    <a
      href={href}
      className={`inline-block py-3 px-4 dark:bg-primary bg-accent text-white rounded dark:hover:bg-secondary hover:bg-secondary ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
