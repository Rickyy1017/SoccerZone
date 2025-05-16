import React from "react";
import Button from "./Button";
import Logo from "../assets/svg/soccer zone.png";

interface NavbarProps {
  onButtonClick?: () => void;
  buttonText?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onButtonClick, buttonText = "Click Me" }) => {
  return (
