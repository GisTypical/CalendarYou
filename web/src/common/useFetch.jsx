import { useState } from "react";

const useFetch = () => {
  const [response, setResponse] = useState({
    status: "",
    message: "",
    calendars: [{ calendarid: "", c_name: "", description: "", color: "" }],
    color: "",
  });

  const [loading, setLoading] = useState(false);
  const doFetch = () => {
    var a = {
      calendars: [
        {
          calendarid: "Calendario",
          c_name: "Hola",
          description: "asdfas",
          color: "asdfasdfasdf",
        },
        {
          calendarid: "No",
          c_name: "No",
          description: "No",
          color: "No",
        },
      ],
    };
    setResponse(a);
    // setResponse({ status: "" });
    // setLoading(true);
    // const options = {
    //   method: props.method,
    //   body: props.formData,
    // };
    // fetch(props.url, options)
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((resp) => {
    //     setLoading(false);
    //     setResponse(resp);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //     setResponse({ status: "500 Internal Server Error" });
    //   });
  };
  return { response, loading, doFetch };
};
export default useFetch;
