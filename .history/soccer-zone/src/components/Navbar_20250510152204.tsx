import React from "react";
import Button from "./Button";
import Logo from "../assets/svg/soccer zone.png";

interface NavbarProps {
  onButtonClick?: () => void;
  buttonText?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick, buttonText = "Click Me" }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-secondary-d">
      <img src={Logo} alt="Soccer Zone Logo" className="w-12 h-auto" />
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </nav>
  );
};

export default Navbar;
