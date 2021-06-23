import React, { useState } from "react";
import SBEvent from "./SBEvent";
import SBHome from "./SBHome";
import SBCalendar from "./SBCalendar";
const SideBar = ({ calendars, username }) => {
  const [side, setSide] = useState("home");
  return (
    <div className="flex-shrink-0 pt-7 w-1/5 h-full bg-gunmetal bg-opacity-75">
      {side === "home" && (
        <SBHome calendars={calendars} setSide={setSide}></SBHome>
      )}
      {side === "event" && (
        <SBEvent caelndars={calendars} setSide={setSide}></SBEvent>
      )}
      {side === "calendar" && (
        <SBCalendar
          caelndars={calendars}
          setSide={setSide}
          username={username}
        ></SBCalendar>
      )}
    </div>
  );
};
export default SideBar;
