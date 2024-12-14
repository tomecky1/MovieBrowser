import {
  StyledPersonWrapper,
  Text,
  WrapperItem,
  ImageWrapper,
  WrapperActorName,
  WrapperRole,
} from "./styled";
import posterExample from "../../image/posterExample.png";
import Crew from "../../image/Crew.png";

export const CastAndCrew = () => {
  return (
    <>
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
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>Liu Yifei</WrapperActorName>
          <WrapperRole>Mulan</WrapperRole>
        </WrapperItem>
      </StyledPersonWrapper>
      <Text>Crew</Text>
      <StyledPersonWrapper>
        <WrapperItem>
          <ImageWrapper src={Crew} alt="pic" />
          <WrapperActorName>Niki Caro</WrapperActorName>
          <WrapperRole>Director</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={Crew} alt="pic" />
          <WrapperActorName>Niki Caro</WrapperActorName>
          <WrapperRole>Director</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={Crew} alt="pic" />
          <WrapperActorName>Niki Caro</WrapperActorName>
          <WrapperRole>Director</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={Crew} alt="pic" />
          <WrapperActorName>Niki Caro</WrapperActorName>
          <WrapperRole>Director</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={Crew} alt="pic" />
          <WrapperActorName>Niki Caro</WrapperActorName>
          <WrapperRole>Director</WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={Crew} alt="pic" />
          <WrapperActorName>Niki Caro</WrapperActorName>
          <WrapperRole>Director</WrapperRole>
        </WrapperItem>
      </StyledPersonWrapper>
    </>
  );
};
