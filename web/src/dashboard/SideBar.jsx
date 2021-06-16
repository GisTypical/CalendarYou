import React, { useEffect } from "react";
import useFetch from "../common/useFetch";

const SideBar = ({ username }) => {
  let formData = new FormData();
  const url = process.env.REACT_APP_FETCH_URL + "/calendar";
  const { response, doFetch } = useFetch({
    url: url,
    method: "GET",
    formData: formData,
  });

  const { response2, doFetch2 } = useFetch({
    url: url,
    method: "POST",
    formData: formData,
  });

  useEffect(() => {
    formData.append("username", username);
    doFetch();
    console.log(response.calendars);
  }, []);

  return (
    <div className="col-span-2 grid grid-rows-4 place-items-center bg-gunmetal bg-opacity-75 h-screen w-1/4 p-12">
      <button
        type="button"
        className="font-bold rounded-xl py-2 px-4 text-background bg-gradient-to-r from-pink-400 to-yellow-500"
      >
        Crear un evento
      </button>
      <button
        type="button"
        className="font-bold rounded-xl py-2 px-4 text-background bg-gradient-to-r from-pink-400 to-yellow-500"
      >
        Crear calendario
      </button>
      <div className="bg-charcoal px-10 py-5 rounded-2xl">
        <h3 className="font-heading text-lg">Calendarios</h3>
        <ul className="m-6">
          {response.calendars.map((cal) => (
            <li key={cal.calendarid}>{cal.c_name}</li>
          ))}
        </ul>
        <div></div>
      </div>
    </div>
  );
};
export default SideBar;
