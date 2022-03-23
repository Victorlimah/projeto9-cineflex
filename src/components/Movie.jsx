import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { API_LINK } from "./App";

export default function Movie() {
  const [days, setDays] = useState(null);
  const parada = `${API_LINK}/movies/${useParams().idMovie}/showtimes`;
  console.log(parada);
  useEffect(() => {
    const request = axios.get(parada);
    request.then((response) => {
      setDays(response.data.days);
    });
  }, []);

  if (days === null) {
    return <div>Carregando...</div>;
  }
  console.log(days);
  return (
    <>
      <SectionTitle nameClass="container-select" text="Selecione o horário" />
      <section className="list-time">
        {days.map((day) => {
          return (
            <article className="day">
              <h3>
                {day.weekday} - {day.date}
              </h3>
              <ul className="list-hour">
                {day.showtimes.map((hour) => {
                  return <li>{hour.name}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </section>
    </>
  );
}
