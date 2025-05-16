import React, { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "../assets/svg/soccer zone.png";

interface NavbarProps {
  onButtonClick?: () => void;
  buttonText?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick, buttonText = "Click Me" }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-[2rem] py-4 bg-secondary-d z-50">
      <img src={Logo} alt="Soccer Zone Logo" className="w-12 h-auto" />
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </nav>
  );
};

export default Navbar;
