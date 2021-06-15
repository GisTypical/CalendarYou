import React from "react";
import Inputs from "./LoginInputs";

const InputCard = () => {
  return (
    <div className="px-12 py-4 pb-8 w-96 bg-gunmetal bg-opacity-75 rounded-2xl">
      <h3 className="mb-4 text-center text-xl font-heading">
        Inicio de sesión
      </h3>
      <Inputs></Inputs>
    </div>
  );
};

export default InputCard;
