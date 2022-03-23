import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { API_LINK } from "./App";

export default function Seats() {
  const [seats, setSeats] = useState(null);
  const { idSession } = useParams();

  useEffect(() => {
    const request = axios.get(`${API_LINK}/showtimes/${idSession}/seats/`);
    request.then((response) => {
      setSeats(response.data.seats);
    });
  }, []);

  console.log(seats);

  if (seats === null) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <SectionTitle text="Selecione o(s) assento(s)" />

      <section className="seats">
        {seats.map((seat) => {
          return (
            <article className="seat">
              {seat.name.length === 1 ? `0${seat.name}` : seat.name}
            </article>
          );
        })}
      </section>

      <form>
        <label for="nameBuyer">Nome do comprador:</label>
        <input type="text" name="nameBuyer" placeholder="Digite seu nome..." />

        <label for="cpfBuyer">CPF do comprador:</label>
        <input type="number" name="cpfBuyer" placeholder="Digite seu cpf..." />
      </form>
    </>
  );
}
