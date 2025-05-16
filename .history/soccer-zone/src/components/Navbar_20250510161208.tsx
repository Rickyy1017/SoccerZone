import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Logo from "../assets/svg/soccer zone.png";

interface NavbarProps {
  onButtonClick?: () => void;
  buttonText?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick, buttonText = "Menu" }) => {
  const [show, setShow] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
      if (window.scrollY > navHeight) {
        setShow(false);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-[4rem] py-4 bg-secondary-d z-50"
    >
      <img src={Logo} alt="Soccer Zone Logo" className="w-12 h-auto" />
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </nav>
  );
};

export default Navbar;
