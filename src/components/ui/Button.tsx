import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="px-4 py-2 rounded-md subheading customBlack bg-white hover:border-transparent hover:bg-gray-100 transition-colors duration-300 ease-in-out hover: cursor-pointer">
      {label}
    </button>
  );
};

export default Button;