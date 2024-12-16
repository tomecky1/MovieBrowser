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
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectStatus } from "../movieBrowserSlice";

export const CastAndCrew = () => {
  const dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const movieId = 550;

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        console.log("Fetching credits for movieId:", movieId); // Sprawdź czy movieId jest poprawne

        const credits = await getMovieCredits(movieId);
        console.log("Raw API response:", credits); // Sprawdź surową odpowiedź

        if (credits && credits.cast) {
          console.log("Cast before setState:", credits.cast); // Sprawdź dane przed setState
          setCast(credits.cast);
          console.log("Cast after setState:", cast); // To pokaże starą wartość ze względu na asynchroniczność
        }

        if (credits && credits.crew) {
          console.log("Crew before setState:", credits.crew);
          setCrew(credits.crew);
        }
      } catch (error) {
        console.error("Error details:", error);
      }
    };

    if (movieId) {
      // Dodaj sprawdzenie czy movieId istnieje
      fetchMovieCredits();
    } else {
      console.log("No movieId provided");
    }
  }, [movieId, cast]);

  return (
    <>
      <Text>Cast</Text>
      <StyledPersonWrapper>
        {cast.length > 0 ? (
          cast.map((member) => (
            <WrapperItem key={member.id}>
              <ImageWrapper
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
                    : posterExample
                }
                alt={member.name}
              />
              <WrapperActorName>{member.name}</WrapperActorName>
              <WrapperRole>{member.character}</WrapperRole>
            </WrapperItem>
          ))
        ) : (
          <Text>No cast available</Text>
        )}
      </StyledPersonWrapper>
      <Text>Crew</Text>
      <StyledPersonWrapper>
        {crew.length > 0 ? (
          crew.map((member) => (
            <WrapperItem key={member.id}>
              <ImageWrapper
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
                    : posterExample
                }
                alt={member.name}
              />
              <WrapperActorName>{member.name}</WrapperActorName>
              <WrapperRole>{member.job}</WrapperRole>
            </WrapperItem>
          ))
        ) : (
          <Text>No crew available</Text>
        )}
      </StyledPersonWrapper>
    </>
  );
};
