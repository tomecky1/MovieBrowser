import { HashRouter } from "react-router";
import { Container } from "./common/Container";
import { NaviRoutes } from "./common/Navigation";

function App() {
  return (
    <HashRouter>
      <Container>
        <NaviRoutes />
      </Container>
    </HashRouter>
  );
}

export default App;
