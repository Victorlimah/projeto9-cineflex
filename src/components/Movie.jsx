import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { API_LINK } from "./App";

export default function Movie() {
  const [days, setDays] = useState(null);
  const { idMovie } = useParams();

  useEffect(() => {
    const request = axios.get(`${API_LINK}/movies/${idMovie}/showtimes`);
    request.then((response) => {
      setDays(response.data.days);
    });
  }, []);

  if (days === null) {
    return <div>Carregando...</div>;
  }

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
                  return (
                    <Link to={`/session/${hour.id}`}>
                      <li>{hour.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </section>
    </>
  );
}
