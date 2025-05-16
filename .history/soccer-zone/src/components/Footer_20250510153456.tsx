import React from "react";
import Logo from "../assets/svg/soccer zone.png";

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-[#000] items-center justify-center p-4 bt-[20px] ">
      <img src={Logo} alt="Soccer Zone Logo" className="w-[130px] h-auto" />
    </footer>
  );
};

export default Footer;
