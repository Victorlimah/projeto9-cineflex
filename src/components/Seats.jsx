import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_LINK}/showtimes/${idSession}/seats/`)
      .then((response) => {
        setSeats(response.data.seats);
        setMovie(response.data);
      })
      .catch(() => {
        alert("Erro ao carregar os assento(s)");
      });
  }, []);

  if (seats === null || movie === null) {
    return <div>Carregando...</div>;
  }

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

      <form onSubmit={handleSubmit}>
        <label for="nameBuyer">Nome do comprador:</label>
        <input
          required
          type="text"
          name="nameBuyer"
          placeholder="Digite seu nome..."
        />

        <label for="cpfBuyer">CPF do comprador:</label>
        <input
          required
          type="number"
          name="cpfBuyer"
          placeholder="Digite seu cpf..."
        />

        <button>Reservar assento(s)</button>
      </form>
      <div className="margin"></div>
      {console.log(movie)}
      {setInfoSuccess(
        movie.seats,
        movie.movie.title,
        movie.day.date,
        movie.name,
        selectedSeats
      )}
      {/* NÃO CONSEGUI FAZER DESTRUCTURING ;-; */}
      <Footer
        posterURL={movie.movie.posterURL}
        title={movie.movie.title}
        hours={`${movie.day.weekday} - ${movie.name}`}
      />
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();

    const order = {
      ids: selectedSeats,
      name: event.target.nameBuyer.value,
      cpf: event.target.cpfBuyer.value,
    };

    axios
      .post(`${API_LINK}/seats/book-many/`, order)
      .then(() => {
        navigate("/success", { state: { order } });
      })
      .catch(() => {
        alert("Erro ao reservar assento(s)");
      });
  }
}

export let infoSuccess;

function setInfoSuccess(seats, title, date, hour, arraySeats) {
  infoSuccess = {
    seats,
    title,
    date,
    hour,
    arraySeats,
  };
}
