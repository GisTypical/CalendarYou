import React from "react";

interface Props {}

const SideBar: React.FC<Props> = () => {
  return (
    <div className="col-span-2 grid grid-rows-4 place-items-center bg-gunmetal bg-opacity-75 h-screen w-1/4 p-12">
      <button
        type="button"
        className="font-bold rounded-xl py-2 px-4 text-background bg-gradient-to-r from-pink-400 to-yellow-500"
      >
        Crear un evento
      </button>
    </div>
  );
};

export default SideBar;
