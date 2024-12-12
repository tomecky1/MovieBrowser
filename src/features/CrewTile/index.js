import {
  FlexContainer,
  StyledPersonWrapper,
  Text,
  WrapperItem,
  ImageWrapper,
  WrapperActorName,
  WrapperRole,
} from "./styled";
import Crew from "../../image/Crew.png";

export const CrewTile = () => {
  return (
    <FlexContainer>
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
    </FlexContainer>
  );
};
