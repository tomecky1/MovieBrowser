import {
  StyledMovieDetailsTile,
  ImageContainer,
  Image,
  Details,
  Header,
  DetailInfo,
  DetailInfoElementType,
  DetailInfoElement,
  MovieDescription,
} from "./styled";
import personDetails from "../../image/personDetails.png";
import { ContainerExtra } from "../../common/Container";
import { useEffect, useState } from "react";
import { getPersonData } from "../usePersonDetailsAPI";
import Loading from "../../common/Loading";
import NotFound from "../../common/NotFound";
import { StyledLink } from "../MovieList/styled";
import { useParams } from "react-router-dom";

export const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPerson = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await getPersonData(id);
        if (fetchedData) {
          setPerson(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching person:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchPerson();
    }
  }, [id]);

  return (
    <>
      <ContainerExtra>
        <StyledMovieDetailsTile>
          {isLoading ? (
            <div>
              <Loading />
            </div>
          ) : person ? (
            <div key={person.id}>
              <StyledLink to={`/person/${person.id}`} key={person.id}>
                <ImageContainer>
                  <Image
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                        : personDetails
                    }
                    alt={person.name}
                  />
                </ImageContainer>
                <Details>
                  <Header>{person.name}</Header>
                  <DetailInfo>
                    <DetailInfoElement>
                      <DetailInfoElementType>
                        Date of birth:
                      </DetailInfoElementType>
                      {person.birthday || "Unknown"}
                    </DetailInfoElement>
                  </DetailInfo>
                </Details>
                <MovieDescription>{person.biography}</MovieDescription>
              </StyledLink>
            </div>
          ) : (
            <div>
              <NotFound />
            </div>
          )}
        </StyledMovieDetailsTile>
      </ContainerExtra>
    </>
  );
};
