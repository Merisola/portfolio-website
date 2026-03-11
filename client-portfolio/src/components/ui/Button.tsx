"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded-full font-medium transition-all duration-300 active:scale-95";

  const variants = {
    primary: "bg-dynamic text-alchemy-dark shadow-dynamic hover:brightness-110",
    outline:
      "border border-dynamic text-dynamic hover:bg-dynamic hover:text-alchemy-dark",
    ghost: "text-slate-400 hover:text-dynamic",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
