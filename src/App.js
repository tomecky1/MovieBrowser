import { HashRouter } from "react-router";
import { Container } from "./common/Container";
import { NaviRoutes } from "./common/Navigation/index.js";

function App() {
  const personId = 287;

  return (
    <HashRouter>
      <Container>
        <NaviRoutes />
      </Container>
    </HashRouter>

  );
}

export default App;
