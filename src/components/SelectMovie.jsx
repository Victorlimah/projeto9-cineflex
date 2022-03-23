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

  if (movies === null) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <SectionTitle nameClass="container-select" text="Selecione um filme" />
      <section className="list-movies">
        {movies.map((movie, index) => {
          return (
            <article className="movie">
              <Link to={`/movies/${index + 1}`}>
                <img src={movie.posterURL} alt="Movie Poster" />
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
