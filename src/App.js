import { Container } from "./common/Container";
import CastTile from "./features/CastTile";
import { CrewTile } from "./features/CrewTile/index.js";
import Header from "./common/Header/index.js";
import { Navigation } from "./common/Navigation";
import MovieDetails from "./features/MovieDetails/index.js";

function App() {
  return (
    <>
      {/*<Routes>*/}
      {/*  <Route path="/" element={<MovieBrowser/>}/>*/}
      {/*  <Route path="/movie/:id" element={<MovieDetails/>}/>*/}
      {/*</Routes>*/}
      <Container>
        <Navigation />
        <Header></Header>
        <MovieDetails />
        <CastTile />
        <CrewTile />
      </Container>
    </>
  );
}

export default App;
