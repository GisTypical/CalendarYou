import React, { useEffect, useState } from "react";
import useFetch from "../common/useFetch";
const Calendar = ({ username }) => {
  let formData = new FormData();
  const url = process.env.REACT_APP_FETCH_URL + "/calendar";
  const { response, doFetch } = useFetch({
    url: url,
    method: "GET",
    formData: formData,
  });
  useEffect(() => {
    formData.append("username", username);
    doFetch();
    console.log(response.calendars);
  }, []);

  return (
    <div>
      {response.calendars.map((cal) => (
        <div>{cal.c_name}</div>
      ))}
    </div>
  );
};
export default Calendar;
