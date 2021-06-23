import { useState } from "react";

const useFetch = (props) => {
  const [response, setResponse] = useState({
    status: "",
    message: "",
    username: "",
    c_name: "",
    color: "",
    description: "",
    calendars: [{ calendarid: "", c_name: "", description: "", color: "" }],
  });

  const [loading, setLoading] = useState(false);
  const doFetch = () => {
    setResponse({ status: "" });
    setLoading(true);
    const options = {
      method: props.method,
      body: props.formData,
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
  return { response, loading, doFetch };
};
export default useFetch;
