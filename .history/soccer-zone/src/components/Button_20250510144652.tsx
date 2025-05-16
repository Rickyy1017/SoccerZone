import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => {
  return (
    <button
      className={`bg-secondary-light text-white px-4 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
