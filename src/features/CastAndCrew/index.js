import React, { useState, useEffect } from "react";
import { getMovieCredits } from "../movieDetailsAPI"; // Upewnij się, że import jest poprawny
import {
  Text,
  StyledPersonWrapper,
  WrapperItem,
  ImageWrapper,
  WrapperActorName,
  WrapperRole,
} from "./styled"; // Upewnij się, że import jest poprawny
import posterExample from "../../image/posterExample.png";

export const CastAndCrew = () => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const movieId = 550;

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        console.log("Fetched credits:", credits); // Dodaj logowanie
        setCast(credits.cast || []); // Upewnij się, że credits.cast jest tablicą
        setCrew(credits.crew || []); // Upewnij się, że credits.crew jest tablicą
      } catch (error) {
        console.error("Failed to fetch movie credits:", error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      <Text>Cast</Text>
      <StyledPersonWrapper>
        {cast.length > 0 ? (
          cast.map((actor) => (
            <WrapperItem key={(actor.id = 287)}>
              <ImageWrapper
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : posterExample
                }
                alt={actor.name}
              />
              <WrapperActorName>{actor.name}</WrapperActorName>
              <WrapperRole>{actor.character}</WrapperRole>
            </WrapperItem>
          ))
        ) : (
          <Text>No cast available</Text>
        )}
      </StyledPersonWrapper>
      <Text>Crew</Text>
      <StyledPersonWrapper>
        {crew.length > 0 ? (
          crew.map((crewMember) => (
            <WrapperItem key={crewMember.id}>
              <ImageWrapper
                src={
                  crewMember.profile_path
                    ? `https://image.tmdb.org/t/p/w185${crewMember.profile_path}`
                    : posterExample
                }
                alt={crewMember.name}
              />
              <WrapperActorName>{crewMember.name}</WrapperActorName>
              <WrapperRole>{crewMember.job}</WrapperRole>
            </WrapperItem>
          ))
        ) : (
          <Text>No crew available</Text>
        )}
      </StyledPersonWrapper>
    </>
  );
};
