import React from "react";
import Button from "../common/Button";
import Logo from "../common/Logo";
import { monthNames as MONTH_NAMES } from "../common/Month";
const DashNavBar = ({ username }) => {
    let date = new Date();
    return (<div className="h-20 col-span-6 grid grid-cols-5 px-10 py-4 border-background border-opacity-50 border-b-2 bg-gunmetal items-center bg-opacity-75">
      <div className="col-span-2 left-nav flex space-x-12">
        <Logo></Logo>
      </div>
      <div className="text-center font-heading text-xl">
        {`${MONTH_NAMES[date.getMonth()]}, ${date.getFullYear()}`}
      </div>
      <div className="right-nav col-span-2 hidden md:flex flex-row-reverse items-center space-x-8 space-x-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
        </svg>
        {username && <p>{username}</p>}
        <Button text="Invitar"></Button>
      </div>
    </div>);
};
export default DashNavBar;
