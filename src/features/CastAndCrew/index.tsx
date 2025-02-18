import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../movieDetailsAPI";
// @ts-ignore
import { ReactComponent as ProfileIcon } from "../../icons/Picture.svg";
import { ImageWrapper, StyledPersonWrapper, Text, WrapperActorName, WrapperItem, WrapperRole, } from "./styled";
import { useNavigate } from "react-router-dom";

interface CastAndCrewProps {
    movieId: number;
    personId: number;
    role: string;
    character: string;
    actorId: number;
    name: string;
    job: string;
    profilePath: string;
    posterPath: string;
    voteAverage: number;
    voteCount: number;
    releaseDate: string;
    overview: string;
    credit: string;
    credit_id: string;

}

export const CastAndCrew = ({ movieId }:CastAndCrewProps) => {
  const navigate = useNavigate()
  const handleActorClick = (actorId: number) => {
    navigate(`/person/${actorId}`);
  };
  interface Credit {
      id: number;
      credit_id: string;
      name: string;
      profile_path: string | null;
      character?: string;
      job?: string;
  }

  const [credits, setCredits] = useState<{ cast: Credit[]; crew: Credit[]; }>({ cast: [], crew: [] });

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const fetchedCredits = await getMovieCredits(movieId);
        if (fetchedCredits) {
          setCredits(fetchedCredits);
        }
      } catch (error) {
        console.error("Error details:", error);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      <Text>Cast</Text>
      <StyledPersonWrapper>
        {credits.cast.length > 0 ? (
          credits.cast.map((member) => (
            <WrapperItem key={`${member.id}-${member.credit_id}`} onClick={() => handleActorClick(member.id)}
              style={{ cursor: "pointer" }}>
              <ImageWrapper>
                {member.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                    alt={member.name}
                  />
                ) : (
                  <ProfileIcon />
                )}
              </ImageWrapper>
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
          credits.crew.map((member, index) => (
            <WrapperItem key={`${member.id}-${member.credit_id}`} onClick={() => handleActorClick(member.id)} style={{ cursor: "pointer" }}>
              <ImageWrapper>
                {member.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                    alt={member.name}
                  />
                ) : (
                  <ProfileIcon />
                )}
              </ImageWrapper>
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