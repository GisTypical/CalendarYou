import { useState } from "react";

const useFetch = (props) => {
  const [response, setResponse] = useState({
    status: "",
    message: "",
    username: "",
    calendars: [{ calendarid: "", c_name: "", description: "", color: "" }],
    events: [],
  });

  const [loading, setLoading] = useState(false);
  const doGet = () => {
    // setResponse({
    //   calendars: [
    //     { 
    //       calendarid: "21332131",
    //       c_name: "31213131",
    //       description: "3213131",
    //       color: "31322"
    //     }
    //   ],
    //   events: [
    //     {
    //       eventid: "403541",
    //       calendarid: "453151",
    //       event_name: "Evento",
    //       description: "sadfasd",
    //       start_time: "1:30",
    //       end_time: "2:30",
    //       date: "2021/01/15",
    //       img_path: "",
    //     },
    //   ],
    // });
    // return;
    setResponse({ status: "" });
    setLoading(true);
    const options = {
      method: "GET",
    };
    fetch(props.url, options)
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setLoading(false);
        setResponse(resp);
      })
      .catch(() => {
        setLoading(false);
        setResponse({ status: "500 Internal Server Error" });
      });
  };
  return { response, loading, doGet };
};
export default useFetch;
