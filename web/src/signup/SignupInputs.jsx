import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../common/useFetch";
import useForm from "../common/useForm";
const Inputs = () => {
    const history = useHistory();
    const [passEqual, setPassEqual] = useState(true);
    const [values, handleChange] = useForm({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        passverif: "",
    });
    const url = process.env.REACT_APP_FETCH_URL + "/signup";
    const formData = new FormData();
    const { response, loading, doFetch } = useFetch({
        url: url,
        method: "POST",
        formData: formData,
    });
    useEffect(() => {
        setPassEqual(values.password === values.passverif ||
            (values.passverif === "" && values.password === ""));
    }, [values.password, values.passverif]);
    const isResponse = () => {
        if (!loading && response.status === "409 Conflict") {
            return (<p className="text-center text-yellow-600">
          Nombre de usuario ya tomado
        </p>);
        }
        if (!loading && response.status === "500 Internal Server Error") {
            return <p className="text-center text-red-500">{response.status}</p>;
        }
        if (!loading && response.status === "200 OK") {
            history.push("/login/user");
        }
    };
    return (<div className="grid gap-6">
      <input className="bg-charcoal p-2 rounded-xl" type="text" name="first_name" value={values.first_name} onChange={handleChange} placeholder="Nombre"/>
      <input className="bg-charcoal p-2 rounded-xl" type="text" name="last_name" id="last_name" value={values.last_name} onChange={handleChange} placeholder="Apellido"/>
      <input className="bg-charcoal p-2 rounded-xl" type="text" name="username" id="username" value={values.username} onChange={handleChange} placeholder="Nombre de usuario"/>
      <input className="bg-charcoal p-2 rounded-xl" type="password" name="password" id="password" value={values.password} onChange={handleChange} placeholder="Contraseña"/>
      {!passEqual && (<p className="text-center text-red-500">Contraseñas distintas</p>)}
      <input className="bg-charcoal p-2 rounded-xl" type="password" name="passverif" id="passverif" value={values.passverif} onChange={handleChange} placeholder="Verificar Contraseña"/>
      <button className="font-bold rounded-xl p-2 text-background bg-gradient-to-r from-pink-400 to-yellow-500" onClick={() => {
            if (passEqual) {
                formData.append("username", values.username.toLowerCase());
                formData.append("first_name", values.first_name);
                formData.append("last_name", values.last_name);
                formData.append("password", values.password);
                doFetch();
            }
        }}>
        Registrar
      </button>
      {loading && <p className="text-center">Enviando solicitud...</p>}
      {isResponse()}
    </div>);
};
export default Inputs;
