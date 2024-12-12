import {
  FlexContainer,
  StyledPersonWrapper,
  Text,
  WrapperItem,
  ImageWrapper,
  WrapperActorName,
  WrapperRole
} from "./styled";
import posterExample from "../../image/posterExample.png";

const CastTile = () => {
  return (
    <FlexContainer>
      <Text>Cast</Text>
      <StyledPersonWrapper>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>  <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>  <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>  <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>  <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>  <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>  <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>  <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>  <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
      </StyledPersonWrapper>
    </FlexContainer>
  );
};

export default CastTile;
