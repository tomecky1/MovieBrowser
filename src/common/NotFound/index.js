import { Wrapper, Text, ImageWrapper } from "./styled";
import Picture from "../../image/Picture.png";

const NotFound = ({ query }) => {
  return (
    <Wrapper>
      <Text>
        Sorry, there are no results for "{query}"
      </Text>
      <ImageWrapper>
        <img src={Picture} alt="No results illustration" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default NotFound;