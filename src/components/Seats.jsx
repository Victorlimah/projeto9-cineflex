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
      setSeats(response.data);
    });
  }, [idSession]);

  console.log(seats);
  return (
    <>
      <SectionTitle text="Selecione o(s) assento(s)" />
      <form>
        <label for="nameBuyer">Nome do comprador:</label>
        <input type="text" name="nameBuyer" placeholder="Digite seu nome..." />

        <label for="cpfBuyer">CPF do comprador:</label>
        <input type="number" name="cpfBuyer" placeholder="Digite seu cpf..." />
      </form>
    </>
  );
}
