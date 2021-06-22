import React, { useState, useEffect } from "react";
import useGet from "../common/useGet";

/** Obtener el dia Lunes de una semana n */

const getMonday = (date) => {
  const weekday = new Date();
  const monday = new Date();
  monday.setDate(
    weekday.getDay() !== 0 ? date - (weekday.getDay() - 1) : date - 6
  );
  return monday;
};

/** Obtener los dias de las semanas para headers */

const WeekHeaders = ({ monday, currDate }) => {
  let days = [];
  for (let i = 0; i < 7; i++) {
    const day = monday.getDate() + i;
    if (day === currDate) {
      days.push(
        <div key={day} id={day} className="text-yellow-400 font-bold">
          {day}
        </div>
      );
    } else {
      days.push(
        <div key={day} id={day}>
          {monday.getDate() + i}
        </div>
      );
    }
  }
  return days;
};

const WeekTime = () => {
  let hour = new Date();
  hour.setHours(0);
  hour.setMinutes(0);
  let blocks = [];
  for (let i = 0; i < 24; i++) {
    hour.setTime(hour.getTime() + 30 * 60000);
    for (let j = 0; j < 7; j++) {
      blocks.push(
        <div
          key={`${hour.getHours()}:${hour.getMinutes()}-${j}`}
          id={`${hour.getHours()}:${hour.getMinutes()}-${j}`}
        ></div>
      );
    }
  }
  return blocks;
};

const parseEvents = (events) => {
  if (events.length === 0) {
    return;
  }
  console.log(events[0].start_time);
  let block = document.getElementById(`${events[0].start_time}-2`);
  block.innerHTML = "me has dado?";
};

const Calendar = ({ calendars }) => {
  const [currDate, setCurrDate] = useState(new Date());
  const [monday, setMonday] = useState(getMonday(currDate.getDate()));
  const [weekDays, setWeekDays] = useState([]);

  const { response, doGet } = useGet({
    url: process.env.REACT_APP_FETCH_URL + `/calendar?calendar=${calendars}`,
  });

  useEffect(() => {
    setCurrDate(new Date());
    doGet();
  }, []);

  parseEvents(response.events);
  return (
    <div className="flex flex-col p-2 m-5 mb-20 h-5/6 w-full overflow-auto rounded-2xl bg-gunmetal bg-opacity-75">
      <div className="grid grid-cols-7 auto-rows-fr place-items-center w-full">
        <WeekHeaders
          monday={monday}
          currDate={currDate.getDate()}
        ></WeekHeaders>
        <WeekTime></WeekTime>
      </div>
    </div>
  );
};
export default Calendar;
