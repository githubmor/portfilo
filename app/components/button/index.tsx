import React from 'react'

type Props = {
  text: string;
  className?: string;
  onClick: () => void;
};

const Button = ({ text, className = "", onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-[0.375rem] rounded-xl bg-gray-900 text-gray-50 hover:bg-gray-700 active:bg-gray-800 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button