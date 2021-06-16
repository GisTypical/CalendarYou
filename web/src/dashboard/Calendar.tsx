import React, { useEffect, useState } from "react";
import useFetch from "../common/useFetch";

interface Props {
  username: string | null;
}

const Calendar: React.FC<Props> = ({ username }) => {
  let formData: FormData = new FormData();
  const [calendar, setCalendar] = useState("");
  const url: string = process.env.REACT_APP_FETCH_URL + "/calendar";
  const { response, loading, doFetch } = useFetch({
    url: url,
    method: "GET",
    formData: formData,
  });

  useEffect(() => {
    formData.append("username", username!);
    doFetch();
    console.log("A");
  }, []);

  const a = () => {
    var a: Array<string> = [""];
    for (let i = 0; i < response.calendars.length; i++) {}
    return <p>{JSON.stringify(response.calendars[0])}</p>;
  };

  return <div>{a()}</div>;
};

export default Calendar;
