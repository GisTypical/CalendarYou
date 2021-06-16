import React, { useContext } from "react";
import UserContext from "../common/UserContext";
import Calendar from "./Calendar";
import DashNavBar from "./DashNavBar";
import SideBar from "./SideBar";
const Index = () => {
  const { username } = useContext(UserContext);
  return (
    <div className="place-items-stretch">
      <DashNavBar username={username}></DashNavBar>
      <div className="flex">
        <SideBar username={username}></SideBar>
        <Calendar username={username}></Calendar>
      </div>
    </div>
  );
};
export default Index;
