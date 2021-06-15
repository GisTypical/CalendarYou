import React, { useState } from "react";

interface Props {
  first_name?: string;
  last_name?: string;
  username: string;
  password: string;
  passverif?: string;
}

const useForm = (
  props: Props
): [Props, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [values, setValues] = useState(props);
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useForm;
