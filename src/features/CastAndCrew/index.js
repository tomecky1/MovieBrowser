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
        const credits = await getMovieCredits(movieId);
        console.log("Cała odpowiedź:", credits);
        console.log("Cast array:", credits.cast);
        console.log("Fetched credits:", credits); // Dodaj logowanie to jest okay
        if (credits && credits.cast) {
          setCast(credits.cast); // Przekaż całą tablicę
        } else {
          console.log("No cast data found");
        }
        if (credits && credits.crew) {
          setCrew(credits.crew);
        } else {
          console.log("No crew data found");
        }
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
