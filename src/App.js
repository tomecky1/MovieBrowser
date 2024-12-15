import { Container } from "./common/Container";
import Header from "./common/Header/index.js";
import { Navigation } from "./common/Navigation";
import MovieDetails from "./features/MovieDetails/index.js";

function App() {
  return (
    <Container>
      <Navigation />
      <Header />
      <MovieDetails />
    </Container>
  );
}

export default App;
