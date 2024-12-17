import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Person } from "../../features/Person";
import { MovieList } from "../../features/MovieList";

export function NaviRoutes() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/person" element={<Person />} />
      </Routes>
    </HashRouter>
  );
}
