import { Container } from "./common/Container";
import CastTile from "./features/CastTile";
import Header from "./common/Header/index.js";
import { MovieDetails } from "./features/MovieDetails/index.js";
import { Navigation } from "./common/Navigation";

function App() {
  return (
    <Container>
      <Navigation />
      <Header></Header>
      <MovieDetails />
      <CastTile />
    </Container>
  );
}

export default App;
