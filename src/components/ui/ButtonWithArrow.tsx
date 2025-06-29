import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonWithArrowProps {
  label: string;
}

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({ label }) => {
  return (
    <button
      className="w-fit group inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md"
    >
      {label}
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
    </button>
  );
};

export default ButtonWithArrow;
