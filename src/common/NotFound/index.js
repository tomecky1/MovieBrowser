import { Wrapper, Text, ImageWrapper } from "./styled";
import Picture from "../../image/Picture.png";

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <img src={Picture} alt="" />
        </ImageWrapper>
      </Wrapper>
    </>
  );
};

export default NotFound;