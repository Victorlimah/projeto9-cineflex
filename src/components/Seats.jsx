import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { API_LINK } from "./App";
import Footer from "./Footer";

export default function Seats() {
  const [movie, setMovie] = useState(null);
  const [seats, setSeats] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { idSession } = useParams();

  console.log("selected: " + selectedSeats);

  useEffect(() => {
    const request = axios.get(`${API_LINK}/showtimes/${idSession}/seats/`);
    request.then((response) => {
      setSeats(response.data.seats);
      setMovie(response.data);
    });
  }, []);

  if (seats === null || movie === null) {
    return <div>Carregando...</div>;
  }

  console.log(movie);
  return (
    <>
      <SectionTitle text="Selecione o(s) assento(s)" />

      <section className="seats">
        {seats.map(({ id, name, isAvailable }) => {
          if (isAvailable) {
            return (
              <article
                className={
                  selectedSeats.includes(id)
                    ? "available selected"
                    : "available"
                }
                onClick={() => {
                  selectedSeats.includes(id)
                    ? setSelectedSeats(
                        selectedSeats.filter((seat) => seat !== id)
                      )
                    : setSelectedSeats([...selectedSeats, id]);
                }}
              >
                {name.length === 1 ? `0${name}` : name}
              </article>
            );
          } else {
            return (
              <article
                className="unavailable"
                onClick={() => alert("Este lugar não está disponível.")}
              >
                {name.length === 1 ? `0${name}` : name}
              </article>
            );
          }
        })}
      </section>

      <section className="indicator">
        <div className="indicator-selected">
          <span className="selected"></span>
          <span>Selecionado</span>
        </div>

        <div className="indicator-available">
          <span className="available"></span>
          <span>Disponíveis</span>
        </div>

        <div className="indicator-unavailable">
          <span className="unavailable"></span>
          <span>Indisponíveis</span>
        </div>
      </section>

      <form>
        <label for="nameBuyer">Nome do comprador:</label>
        <input type="text" name="nameBuyer" placeholder="Digite seu nome..." />

        <label for="cpfBuyer">CPF do comprador:</label>
        <input type="number" name="cpfBuyer" placeholder="Digite seu cpf..." />

        <button>Reservar assento(s)</button>
      </form>
      <div className="margin"></div>
      <Footer
        posterURL={movie.movie.posterURL}
        title={movie.movie.title}
        hours={`${movie.day.weekday} - ${movie.name}`}
      />
    </>
  );
}
