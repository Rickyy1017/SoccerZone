import React from "react";
import Logo from "../assets/svg/soccer zone.png";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center p-4 bg-secondary-d">
      <img src={Logo} alt="Soccer Zone Logo" className="w-[100px] h-auto" />
    </footer>
  );
};

export default Footer;
