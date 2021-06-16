import React from "react";

interface Props {}

const SideBar: React.FC<Props> = () => {
  return (
    <div className="col-span-2 bg-gunmetal bg-opacity-75 h-screen w-1/4 p-12">
      <p className="h-full">Hola</p>
    </div>
  );
};

export default SideBar;
