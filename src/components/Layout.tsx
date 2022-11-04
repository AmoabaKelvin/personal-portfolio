import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const setSiteTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className={`${
        theme == "dark" ? "dark" : ""
      } min-h-screen container font-raleway`}
    >
      <div className="dark:text-white">
        <Header triggerDarkMode={setSiteTheme} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
