import React from "react";
import useForm from "../common/useForm";
import useFetch from "../common/useFetch";

const SBEvent = ({ calendars, setSide }) => {
  const url = process.env.REACT_APP_FETCH_URL + "/event";
  const formData = new FormData();
  const { response, loading, doFetch } = useFetch({
    url: url,
    method: "POST",
    formData: formData,
  });

  const [event, handleChange] = useForm({
    calendarid: "",
    event_name: "",
    description: "",
    start_time: "",
    end_time: "",
    date: "",
    img_path: "",
  });

  return (
    <div className="grid grid-flow-row space-y-4 m-3 place-items-center">
      <h3 className="font-heading">Crear evento</h3>
      <input
        className="bg-charcoal p-2 w-full rounded-xl"
        type="text"
        name="event_name"
        value={event.event_name}
        onChange={handleChange}
        placeholder="Nombre del evento"
      />
      <textarea
        className="bg-charcoal border-0 w-full focus:ring-0 p-2 flex-none rounded-2xl resize-none"
        name="description"
        id="description"
        value={event.description}
        onChange={handleChange}
        placeholder="Descripción"
      ></textarea>
      <input
        className="bg-charcoal p-2 rounded-2xl w-full"
        type="date"
        name="date"
        id="date"
        value={event.date}
        onChange={handleChange}
      />
      <label className="text-sm" htmlFor="start_time">
        Tiempo de inicio
      </label>
      <input
        className="bg-charcoal p-2 rounded-2xl w-full"
        type="time"
        name="start_time"
        value={event.start_time}
        onChange={handleChange}
      />
      <label className="text-sm" htmlFor="end_time">
        Tiempo de finalización
      </label>
      <input
        className="bg-charcoal p-2 rounded-2xl w-full"
        type="time"
        name="end_time"
        value={event.end_time}
        onChange={handleChange}
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
            formData.append("username", calendars[0].calendarid);
            formData.append("event_name", event.event_name.toLowerCase());
            formData.append("description", event.description);
            formData.append("start_time", event.start_time);
            formData.append("end_time", event.end_time);
            formData.append("date", event.date);
            formData.append("img_path", event.img_path);
            doFetch();
          }}
        >
          Crear
        </button>
      </div>
    </div>
  );
};

export default SBEvent;
