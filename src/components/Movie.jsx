import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { API_LINK } from "./App";
import Footer from "./Footer";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [days, setDays] = useState(null);
  const { idMovie } = useParams();

  useEffect(() => {
    const request = axios.get(`${API_LINK}/movies/${idMovie}/showtimes`);
    request.then((response) => {
      setDays(response.data.days);
      setMovie(response.data);
    });
  }, []);

  if (days === null || movie === null) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <SectionTitle text="Selecione o horário" />
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
      <div className="margin"></div>
      <Footer posterURL={movie.posterURL} title={movie.title} />
    </>
  );
}
