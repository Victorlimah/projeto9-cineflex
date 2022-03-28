import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { infoSuccess } from "./Seats";

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { seats, title, date, hour, arraySeats } = infoSuccess;
  const { name, cpf } = location.state.order;

  console.log("movie" + seats);
  console.log("date" + date);
  console.log("hour" + hour);
  console.log("arraySeats" + arraySeats);

  let arrayNameSeats = [];

  function formatCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  while (arrayNameSeats.length !== arraySeats.length) {
    let count = 0;
    for (let i = 0; i < seats.length; i++) {
      if (seats[i].id === arraySeats[count]) {
        arrayNameSeats.push(seats[i].name);
        count++;
      }
    }
  }

  console.log("arrayNameSeats" + arrayNameSeats);

  return (
    <>
      <SectionTitle name="success" text="Pedido feito com sucesso!" />
      <section className="infoSuccess">
        <div>
          <h2>Filme e sessão</h2>
          <h3>{title}</h3>
          <h3>
            {date} - {hour}
          </h3>
        </div>

        <div>
          <h2>Ingressos</h2>
          {arrayNameSeats.map((seat) => {
            return <h3>Assento {seat}</h3>;
          })}
        </div>

        <div>
          <h2>Comprador</h2>
          <h3>Nome: {name}</h3>
          <h3>CPF: {formatCPF(cpf)}</h3>
        </div>

        <Link to={"/"}>
          <button>Voltar pra home</button>
        </Link>
      </section>
    </>
  );
}
