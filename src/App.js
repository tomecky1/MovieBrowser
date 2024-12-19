import { Container } from "./common/Container";
import { NaviRoutes } from "./common/Navigation/index.js";
import { Pagination } from "./common/Pagination/index.js";

function App() {
  const personId = 287;

  return (
    <Container>
      <NaviRoutes />
      {/* <MovieDetails /> */}
      {/* <PersonCredits personId={personId} /> */}
      {/* <Pagination /> */}
    </Container>
  );
}

export default App;
