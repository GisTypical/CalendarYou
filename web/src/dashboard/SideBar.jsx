import React from "react";

const SideBar = ({ calendars }) => {
  return (
    <div className="flex-shrink-0 py-16 w-1/5 h-full bg-gunmetal bg-opacity-75">
      <aside className="flex flex-col place-items-center space-y-16">
        <button
          type="button"
          className="font-bold rounded-xl w-4/5 py-2 text-background bg-gradient-to-r from-pink-400 to-yellow-500"
        >
          Crear un evento
        </button>
        <div className="flex flex-col break-words w-full place-items-center row-span-2 space-y-5">
          <button
            type="button"
            className="font-bold rounded-xl w-4/5 py-2 text-background bg-gradient-to-r from-pink-400 to-yellow-500"
          >
            Crear calendario
          </button>
          <div className="bg-charcoal py-5 px-2 w-4/5 rounded-2xl text-center">
            <h3 className="font-heading text-lg">Calendarios</h3>
            {calendars ? (
              calendars.map((cal, i) => <div key={i}>{cal.c_name}</div>)
            ) : (
              <div>No hay calendarios creados</div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};
export default SideBar;
