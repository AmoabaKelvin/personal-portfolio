import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "./links/Link";

type HeaderProps = {
  triggerDarkMode: () => any;
};

const Header = ({ triggerDarkMode }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center py-2 text-black dark:text-white">
      <h1>Kelvin Amoaba</h1>
      <div className="flex gap-10 sm:gap-10 items-center">
        <BsFillMoonStarsFill onClick={triggerDarkMode} />
        <Link href="https://docs.google.com/document/d/1jKyBzG7VCPzH9PsZBIefBCUC6bSaPdah9yXVgtyjhqg/edit?usp=sharing">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
