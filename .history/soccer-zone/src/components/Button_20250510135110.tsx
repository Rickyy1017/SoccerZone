import React from "react";
import clsx from "clsx";

type Variant = "primary" | "accent" | "secondary" | "dark";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-[#00a650] text-white hover:bg-[#006837]",
  accent: "bg-[#a2ff73] text-black hover:bg-[#8ce95e]",
  secondary: "bg-white text-[#333333] border border-[#333333]",
  dark: "bg-[#333333] text-white hover:bg-black",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded font-semibold transition duration-200",
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
