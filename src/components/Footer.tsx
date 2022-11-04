import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-10 py-5 text-center">
      © Kelvin Amoaba - {currentYear}
    </div>
  );
};

export default Footer;
