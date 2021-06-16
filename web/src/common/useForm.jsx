import { useState } from "react";
const useForm = (props) => {
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
