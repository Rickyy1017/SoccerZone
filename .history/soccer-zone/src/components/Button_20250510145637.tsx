import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => {
  return (
    <button
      className='bg-primary text-white p-3 text-[18px] rounded-md hover:bg-[#000] '
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
