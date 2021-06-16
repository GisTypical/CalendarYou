import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Logo from "../common/Logo";
const NavBar = () => {
    return (<div className="grid place-items-center px-12 py-5 rounded-b-xl md:place-items-stretch md:grid-cols-2 md:px-32">
      <div className="left-nav flex space-x-12 items-center">
        <Logo></Logo>
        <Link to="/about">
          <button className="font-semibold">Contacto</button>
        </Link>
      </div>
      <div className="right-nav hidden md:flex flex-row-reverse items-center space-x-12 space-x-reverse">
        <Link to="/signup/new">
          <Button text="Registrarse"></Button>
        </Link>
        <Link to="/login/user">
          <button className="font-semibold right-3">Iniciar sesion</button>
        </Link>
      </div>
    </div>);
};
export default NavBar;
