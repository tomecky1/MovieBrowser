import { Container } from "./common/Container";
import { Image } from "./common/Header/styled";
import Header from "./common/Header";
import poster3 from "./image/poster3.jpg";
import Error from "./Error";
import { Navigation } from "./common/Navigation";
import { Container } from "./common/Container";
import { Image } from "./common/Header/styled";
import Header from "./common/Header";
import poster3 from "./image/poster3.jpg";
import Error from "./Error";

function App() {
  return (
    <Container>
      <Navigation />
      <Header 
      title = {"Nazwa filmu"}
      rating = {"Ocena"}
      votes = {"Głosy"}
      >
        <Image src={poster3} alt="" />
      </Header>
      <Error></Error>
    </Container>
  );
}

export default App;
