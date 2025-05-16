import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Logo from "../assets/svg/soccer zone.png";

interface NavbarProps {
  onButtonClick?: () => void;
  buttonText?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick, buttonText = "Menu" }) => {
  const [show, setShow] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => {
        if (window.scrollY > 1) {
          setShow(true);
        } else {
          setShow(false);
        }
      }, 1000); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-[4rem] py-4 bg-secondary-d z-50">
      <img src={Logo} alt="Soccer Zone Logo" className="w-12 h-auto" />
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </nav>
  );
};

export default Navbar;
