import {
  StyledPersonWrapper,
  FlexContainer,
  WrapperItem,
  ImageWrapper,
  Text,
  WrapperActorName,
} from "./styled";
import posterExample from "../../image/posterExample.png";
import { getPopularPersons } from "../usePopularPeopleListAPI"; // Adjust the import path as necessary
import { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import NotFound from "../../common/NotFound";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Dodajemy styled component dla linku
const StyledPersonLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Person = () => {
  const [persons, setPersons] = useState({ peoples: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await getPopularPersons();
        if (fetchedData && fetchedData.peoples) {
          setPersons(fetchedData);
        } else {
          setPersons({ peoples: [] });
        }
      } catch (error) {
        console.error("Error fetching people:", error);
        setPersons({ peoples: [] });
      } finally {
        setIsLoading(false);
      }
    };
    fetchPeople();
  }, []);

  return (
    <FlexContainer>
      <Text>Popular people</Text>
      <StyledPersonWrapper>
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : persons?.peoples?.length > 0 ? (
          persons.peoples.map((person) => (
            <WrapperItem key={person.id}>
              <StyledPersonLink to={`/person/${person.id}`}>
                <ImageWrapper
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                      : posterExample
                  }
                  alt={person.name}
                />
                <WrapperActorName>{person.name}</WrapperActorName>
              </StyledPersonLink>
            </WrapperItem>
          ))
        ) : (
          <div>
            <NotFound />
          </div>
        )}
      </StyledPersonWrapper>
    </FlexContainer>
  );
};
