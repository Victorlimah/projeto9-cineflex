import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SelectMovie from "./SelectMovie";
import Movie from "./Movie";
import "../styles/reset.css";
import "../styles/style.css";
import Seats from "./Seats";
import Success from "./Success";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SelectMovie />} />
        <Route path="/movies/:idMovie" element={<Movie />} />
        <Route path="/session/:idSession" element={<Seats />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export const API_LINK = "https://mock-api.driven.com.br/api/v5/cineflex";
