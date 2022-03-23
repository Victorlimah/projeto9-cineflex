import SectionTitle from "./SectionTitle";
import { useState, useEffect } from "react";
import { API_LINK } from "./App";

export default function Movie() {
  return (
    <>
      <SectionTitle nameClass="container-select" text="Selecione o horário" />
      <section className="list-time">
        <article className="day">
          <h3>Domingo - 00/00/0000</h3>
          <ul className="list-hour">
            <li>15:00</li>
            <li>19:00</li>
          </ul>
        </article>
      </section>
    </>
  );
}
