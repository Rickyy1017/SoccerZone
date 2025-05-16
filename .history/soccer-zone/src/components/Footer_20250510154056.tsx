import React from "react";
import Logo from "../assets/svg/soccer zone.png";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bg-[#000] items-center justify-center p-[90px]  ">
      <img src={Logo} alt="Soccer Zone Logo" className="w-[130px] h-auto" />
      <p className="text-white">  &copy; {new Date().getFullYear(), get}  </p>
    </footer>
  );
};

export default Footer;
