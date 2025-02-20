import React from "react";

interface ButtonProps {
  href: string;
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 text-lg font-medium rounded-md transition ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
