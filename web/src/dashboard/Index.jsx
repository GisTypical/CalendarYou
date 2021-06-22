import React, { useContext, useEffect } from "react";
import UserContext from "../common/UserContext";
import Calendar from "./Calendar";
import DashNavBar from "./DashNavBar";
import SideBar from "./SideBar";
import useGet from "../common/useGet";

const Index = () => {
  const { username } = useContext(UserContext);

  const { response, doGet } = useGet({
    url: process.env.REACT_APP_FETCH_URL + `/calendar?username=${username}`,
  });

  useEffect(() => {
    doGet();
    console.log(response.calendars);
  }, []);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <DashNavBar username={username}></DashNavBar>
      <div className="flex h-full">
        <SideBar calendars={response.calendars}></SideBar>
        <Calendar calendars={response.calendars}></Calendar>
      </div>
    </div>
  );
};
export default Index;
