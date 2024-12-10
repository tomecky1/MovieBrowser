import { Container } from "./common/Container";
import Header from "./common/Header/index.js";
import MovieDetails from "./features/MovieDetails/index.js";
import Navigation from "./common/Navigation";

function App() {
  return (
    <Container>
      <Navigation />
      <Header></Header>
      <MovieDetails />
    </Container>
  );
}

export default App;
