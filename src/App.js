import {Container} from "./common/Container";
import CastTile from "./features/CastTile";
import Header from "./common/Header/index.js";
import MovieDetails from "./features/MovieDetails/index.js";
import {Navigation} from "./common/Navigation";
import {MovieDetailsTile} from "./features/MovieListTile";

function App() {
  return (
    <Container>
      <Navigation/>
      <Header></Header>
      <MovieDetails/>
      <MovieDetailsTile/>
      <CastTile/>
    </Container>
  );
}

export default App;
