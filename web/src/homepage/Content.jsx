import React from "react";
const Content = () => {
  return (
    <div className="content mt-20 px-9 mx-12 py-4 h-52 md:mx-32 space-y-2 rounded-t-2xl bg-gunmetal bg-opacity-75">
      <h4 className="font-heading text-center text-xl py-2 mb-8">
        Caracteristicas
      </h4>
      <div className="flex w-full">
        <figure className="bg-yellow-400 w-1/6 mx-5 rounded-2xl"></figure>
        <p className="flex-1">Ordena todas tus tareas</p>
        <figure className="bg-pink-400 w-1/6 mx-5 rounded-2xl"></figure>
        <p className="flex-1">Planifica tus eventos con Calendar You</p>
        <figure className="bg-charcoal w-1/6 mx-5 rounded-2xl"></figure>
        <p className="flex-1">El mejor calendario hasta la fecha</p>
      </div>
    </div>
  );
};
export default Content;
