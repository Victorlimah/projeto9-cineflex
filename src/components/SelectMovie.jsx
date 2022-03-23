import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { API_LINK } from "./App";

export default function SelectMovie() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const request = axios.get(`${API_LINK}/movies`);
    request.then((response) => {
      setMovies(response.data);
    });
  }, []);
  console.log(movies);
  if (movies === null) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <SectionTitle nameClass="container-select" text="Selecione um filme" />
      <section className="list-movies">
        {movies.map((movie) => {
          return (
            <article className="movie">
              <Link to={`/filme`}>
                <img src={movie.posterURL} alt="Movie Poster" />
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
