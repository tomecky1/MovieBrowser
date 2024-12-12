import { Container } from "./common/Container";
import Header from "./common/Header/index.js";
import { MovieDetails } from "./features/MovieDetails/index.js";
import { Navigation } from "./common/Navigation";
import { Image } from "./common/Header/styled.js";
import poster3 from "./image/poster3.jpg";
import { MovieDetailsTile } from "./features/MovieListTile/index.js";

function App() {
  return (
    <Container>
      <Navigation />
      <Header title={"Nazwa filmu"} rating={"Ocena"} votes={"Wyświetlenia"}>
        <Image src={poster3} alt="" />
      </Header>
      <MovieDetails />
      <MovieDetailsTile />
    </Container>
  );
}

export default App;
