import { useState } from "react";

interface FetchReq {
  url: string;
  method: string;
  formData: FormData;
}

interface Response {
  status: string;
  message?: string;
}

const useFetch = (props: FetchReq) => {
  const [response, setResponse] = useState<Response>({ status: "" });
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
