import React from "react";
import useFetch from "../common/useFetch";
import useForm from "../common/useForm";

const SBCalendar = ({ setSide, username }) => {
  let formData = new FormData();
  const url = process.env.REACT_APP_FETCH_URL + "/calendar";
  const { response, loading, doFetch } = useFetch({
    url: url,
    method: "POST",
    formData: formData,
  });

  const [calendar, handleChange] = useForm({
    c_name: "",
    description: "",
    color: "",
  });

  return (
    <div className="grid grid-flow-row space-y-4 m-3 place-items-center">
      <h3 className="font-heading">Crear Calendario</h3>
      <input
        className="bg-charcoal p-2 w-full rounded-xl"
        type="text"
        name="c_name"
        value={calendar.c_name}
        onChange={handleChange}
        placeholder="Nombre del evento"
      />
      <textarea
        className="bg-charcoal border-0 w-full focus:ring-0 p-2 flex-none rounded-2xl resize-none"
        name="description"
        id="description"
        value={calendar.description}
        onChange={handleChange}
        placeholder="Descripción"
      ></textarea>
      <input
        className="bg-charcoal p-2 rounded-2xl w-full"
        type="text"
        name="color"
        id="color"
        value={calendar.color}
        onChange={handleChange}
        placeholder="Color"
      />
      <div className="flex space-x-5 w-full">
        <button
          type="button"
          className="font-bold rounded-xl w-4/5 py-2 text-background bg-gradient-to-r from-pink-400 to-yellow-500"
          onClick={() => {
            setSide("home");
          }}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="font-bold rounded-xl w-4/5 py-2 text-background bg-gradient-to-r from-pink-400 to-yellow-500"
          onClick={() => {
            formData.append("c_name", calendar.c_name);
            formData.append("description", calendar.description);
            formData.append("color", calendar.color);
            formData.append("username", username);
            doFetch();
          }}
        >
          Crear
        </button>
      </div>
    </div>
  );
};

export default SBCalendar;
