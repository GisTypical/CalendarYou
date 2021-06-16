import React from "react";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <button className="font-bold rounded-xl py-2 px-4 text-background bg-gradient-to-r from-pink-400 to-yellow-500">
        {text}
      </button>
    </div>
  );
};

export default Button;
