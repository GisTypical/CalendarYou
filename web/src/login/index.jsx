import React from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import InputCard from "./InputCard";
const index = () => {
    return (<div className="grid place-items-center">
      <div className="my-10">
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <InputCard></InputCard>
    </div>);
};
export default index;
