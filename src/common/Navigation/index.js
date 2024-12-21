import { HashRouter, Route, Routes } from "react-router-dom";
import { Person } from "../../features/Person";
import { MovieList } from "../../features/MovieList";
import { Navigation } from "./Navigation";
import MovieDetails from "../../features/MovieDetails";
import { PersonDetails } from "../../features/PersonDetails";
import { SearchResults } from "../../features/SearchResults";

export function NaviRoutes() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/movies" element={<MovieList />} />
        <Route path="/person" element={<Person />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/person/:id" element={<PersonDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
    </HashRouter>
  );
}
