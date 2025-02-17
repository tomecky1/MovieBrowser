import { Wrapper, Text, ImageWrapper } from "./styled";
// @ts-ignore
import Picture from "../../image/Picture.png";

interface Props {
    query: string;
}

const NotFound = ({ query }:Props) => {
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