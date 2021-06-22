import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../common/useFetch";
import useForm from "../common/useForm";
import UserContext from "../common/UserContext";
const Inputs = () => {
  const history = useHistory();
  const url = process.env.REACT_APP_FETCH_URL + "/login";
  const { setUsername } = useContext(UserContext);
  const formData = new FormData();
  const [user, handleChange] = useForm({ username: "", password: "" });

  const { response, loading, doFetch } = useFetch({
    url: url,
    method: "POST",
    formData: formData,
  });

  const isResponse = () => {
    if (!loading && response.status === "401 Unauthorized") {
      return (
        <p className="text-center text-yellow-600">Credenciales incorrectas</p>
      );
    }
    if (!loading && response.status === "500 Internal Server Error") {
      return <p className="text-center text-red-500">{response.status}</p>;
    }
    if (!loading && response.status === "200 OK") {
      setUsername(user.username);
      history.push("/dashboard");
    }
  };
  return (
    <div className="grid gap-6">
      <input
        className="bg-charcoal p-2 rounded-xl"
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Nombre de usuario"
      />
      <input
        className="bg-charcoal p-2 rounded-xl"
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Contraseña"
      />
      <button
        className="font-bold rounded-xl p-2 text-background bg-gradient-to-r from-pink-400 to-yellow-500"
        onClick={() => {
          formData.append("username", user.username.toLowerCase());
          formData.append("password", user.password);
          doFetch();
        }}
      >
        Continuar
      </button>
      {loading && <p className="text-center">Enviando solicitud...</p>}
      {isResponse()}
    </div>
  );
};
export default Inputs;
