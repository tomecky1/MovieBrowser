import { Container } from "./common/Container";
import { AdditionalInfo, Header, HeaderImage } from "./common/Header";
import poster3 from "./image/poster3.jpg"

function App() {
  return (
    <Container>
      <Header>
        <HeaderImage src={poster3} alt=""/>
        <AdditionalInfo>
            Nazwa filmu <br/>
            Ocena <br/>
            Wyświetlenia
          </AdditionalInfo>
      </Header>
    </Container>
  );
}

export default App;
