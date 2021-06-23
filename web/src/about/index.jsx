import React from "react";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <div className="flex flex-col place-items-center">
      <div className="mt-10">
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <div className="px-12 py-4 pb-8 mt-10 w-96 bg-gunmetal bg-opacity-75 rounded-2xl text-center">
        <h3 className="mb-4 text-center text-xl font-heading">Contacto</h3>
        <h3 className="mb-4 text-center text-xl font-heading">
          Realizado por Gerardo Torres
        </h3>
        <a
          className="text-yellow-400 font-bold"
          href="https://github.com/GisTypical"
        >
          GitHub
        </a>
        <div className="mt-5">
          <a target="_blank" href="https://icons8.com/icon/84851/calendar">
            Calendar
          </a>{" "}
          icon by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
};
export default index;
