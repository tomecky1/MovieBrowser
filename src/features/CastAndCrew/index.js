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
import { useEffect, useState } from "react";
import { getMovieCredits } from "../movieDetailsAPI";

export const CastAndCrew = () => {
  const [error, setError] = useState(false);
  const [actor, setActor] = useState(null);
  const movieId = 550; // może być przekazany jako parametr jeśli komponent ma dynamiczne ID

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const fetchedData = await getMovieCredits(movieId);
        if (fetchedData) {
          setActor(fetchedData.actors);
        }
      } catch (err) {
        console.error("Błąd podczas pobierania szczegółów filmu:", err);
        setError(true);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      <Text>Cast</Text>
      <StyledPersonWrapper>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName>
            {actor
              ? actor.find((a) => a.name === "Edward Norton").name
              : "Edward Norton"}
          </WrapperActorName>

          <WrapperRole></WrapperRole>
        </WrapperItem>
        <WrapperItem>
          <ImageWrapper src={posterExample} alt="pic" />
          <WrapperActorName></WrapperActorName>

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
