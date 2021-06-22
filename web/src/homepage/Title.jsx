import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
const Title = () => {
  return (
    <div className="bg-transparent grid place-items-center text-center">
      <div className="text-5xl mt-20 flex flex-col items-center font-bold font-heading space-y-4">
        <h3>Diseña</h3>
        <h3>Planifica</h3>
        <h3>Crea</h3>
      </div>
      <h4 className="font-regular text-lg my-5">
        Un calendario pensado{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-500">
          para ti
        </span>{" "}
        💡
      </h4>
      <Link to="/signup/new">
        <Button text="¡Comenzar ahora!"></Button>
      </Link>
    </div>
  );
};
export default Title;
