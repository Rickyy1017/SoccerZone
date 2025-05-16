import React from "react";
import Logo from "../assets/svg/soccer zone.png";

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-[#] items-center justify-center p-4 bg-secondary-d">
      <img src={Logo} alt="Soccer Zone Logo" className="w-[130px] h-auto" />
    </footer>
  );
};

export default Footer;
