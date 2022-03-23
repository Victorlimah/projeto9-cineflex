import SectionTitle from "./SectionTitle";
// import { useState, useEffect } from "react";
// import { API_LINK } from "./App";
// import axios from "axios";

export default function Movie() {
  //   const [days, setDays] = useState(null);

  //   useEffect(() => {
  //     const request = axios.get(`${API_LINK}/movies/1/showtimes`);
  //     request.then((response) => {
  //       setDays(response.data.days);
  //     });
  //   }, []);

  //   if (days === null) {
  //     return <div>Carregando...</div>;
  //   }

  //   console.log("days aqui: " + days);

  return (
    <>
      <SectionTitle nameClass="container-select" text="Selecione o horário" />
      <section className="list-time">
        <article className="day">
          <h3>Dia 12/34/5678</h3>
          <ul className="list-hour">
            <li>15:00</li>
            <li>19:00</li>
          </ul>
        </article>

        <article className="day">
          <h3>Dia 12/34/5678</h3>
          <ul className="list-hour">
            <li>15:00</li>
            <li>19:00</li>
          </ul>
        </article>
      </section>
    </>
  );
}
