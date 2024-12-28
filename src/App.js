import { Container } from "./common/Container";
import { NaviRoutes } from "./common/Navigation/index.js";

function App() {
  const personId = 287;

  return (
    <Container>
      <NaviRoutes />
      {/* <MovieDetails /> */}
      {/* <PersonCredits personId={personId} /> */}
    </Container>
  );
}

export default App;
