import {Container} from "./common/Container";
import CastTile from "./features/CastTile";
import { CrewTile } from "./features/CrewTile/index.js";
import Header from "./common/Header/index.js";
import MovieDetails from "./features/MovieDetails/index.js";
import {Navigation} from "./common/Navigation";
import {MovieDetailsTile} from "./features/MovieListTile";
import { Pagination } from "./common/Pagination/index.js";

function App() {
  return (
    <Container>
      <Navigation/>
      <Header></Header>
      <MovieDetails/>
      <MovieDetailsTile/>
      <CastTile/>
      <CrewTile/>
      <Pagination/>
    </Container>
  );
}

export default App;
