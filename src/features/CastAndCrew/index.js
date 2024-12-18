import React, { useState, useEffect } from "react";
import { getMovieCredits } from "../movieDetailsAPI";
import {
  Text,
  StyledPersonWrapper,
  WrapperItem,
  ImageWrapper,
  WrapperActorName,
  WrapperRole,
} from "./styled";

export const CastAndCrew = ({ movieId }) => {
  // const dispatch = useDispatch();

  // const movies = useSelector(selectMovies);
  // const status = useSelector(selectStatus);

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  const [credits, setCredits] = useState({ cast: [], crew: [] });

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const fetchedCredits = await getMovieCredits(movieId);
        console.log("Raw API response:", credits);

        if (fetchedCredits) {
          console.log("Cast before setState:", credits.cast);
          setCredits(fetchedCredits);
        }
      } catch (error) {
        console.error("Error details:", error);
      }
    };
    fetchMovieCredits();
  }, [credits, movieId]);

  return (
    <>
      <Text>Cast</Text>
      <StyledPersonWrapper>
        {credits.cast.length > 0 ? (
          credits.cast.map((member) => (
            <WrapperItem key={member.id}>
              <ImageWrapper
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
                    : "https://via.placeholder.com/200"
                }
                alt={member.name}
              />
              <WrapperActorName>{member.name}</WrapperActorName>
              <WrapperRole>Role: {member.character}</WrapperRole>
            </WrapperItem>
          ))
        ) : (
          <Text>No cast available</Text>
        )}
      </StyledPersonWrapper>
      <Text>Crew</Text>
      <StyledPersonWrapper>
        {credits.crew.length > 0 ? (
          credits.crew.map((member) => (
            <WrapperItem key={member.id}>
              <ImageWrapper
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
                    : "https://via.placeholder.com/200"
                }
                alt={member.name}
              />
              <WrapperActorName>{member.name}</WrapperActorName>
              <WrapperRole>Job: {member.job}</WrapperRole>
            </WrapperItem>
          ))
        ) : (
          <Text>No crew available</Text>
        )}
      </StyledPersonWrapper>
    </>
  );
};
