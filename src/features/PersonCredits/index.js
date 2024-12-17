import React, { useEffect, useState } from "react";
import { getPersonMovieCredits } from "../useApiKey"; // Import funkcji API
import styled from "styled-components";
const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 20px 0 10px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const ListItem = styled.div`
  width: 150px;
  text-align: center;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export const PersonCredits = ({ personId }) => {
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchCredits = async () => {
      const fetchedData = await getPersonMovieCredits(personId);
      if (fetchedData) {
        setCredits(fetchedData);
      } else {
        setError(true);
      }
    };
    fetchCredits();
  }, [personId]);
  return (
    <div>
      <SectionTitle>Movies</SectionTitle>
      <ListWrapper>
        {credits.cast.length > 0 ? (
          credits.cast.map((movie) => (
            <ListItem key={movie.id}>
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "https://via.placeholder.com/200"
                }
                alt={movie.title}
              />
              <div>{movie.title}</div>
              <div>Role: {movie.character}</div>
            </ListItem>
          ))
        ) : (
          <p>No cast data available</p>
        )}
      </ListWrapper>
      <SectionTitle>Crew</SectionTitle>
      <ListWrapper>
        {credits.crew.length > 0 ? (
          credits.crew.map((movie) => (
            <ListItem key={movie.id}>
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "https://via.placeholder.com/200"
                }
                alt={movie.title}
              />
              <div>{movie.title}</div>
              <div>Job: {movie.job}</div>
            </ListItem>
          ))
        ) : (
          <p>No crew data available</p>
        )}
      </ListWrapper>
      {error && <p>Unable to fetch credits data.</p>}
    </div>
  );
};
