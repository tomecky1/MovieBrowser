import {
  DetailInfo,
  DetailInfoElement,
  DetailInfoElementType,
  Details,
  Header,
  Image,
  ImageContainer,
  MovieDescription,
  StyledMovieDetailsTile,
} from "./styled";

import personDetails from "../../image/personDetails.png";
import {useEffect, useState} from "react";
import {getPersonData} from "../usePersonDetailsAPI";
import Loading from "../../common/Loading";
import NotFound from "../../common/NotFound";
import {FlexCont, StyledLink} from "../MovieList/styled";
import {useParams} from "react-router-dom";
import {MoviesCastAndCrew} from "../MoviesCastAndCrew";
import {Pagination} from "../../common/Pagination";

export const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const formatDateToPL = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  };

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
    <FlexCont>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : person ? (
        <>
          <StyledMovieDetailsTile>
            <StyledLink to={`/person/${person.id}`}>
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
                    <DetailInfoElementType>Date of birth: </DetailInfoElementType>
                    {formatDateToPL(person.birthday) || "Unknown"}
                  </DetailInfoElement>
                  <DetailInfoElement>
                    <DetailInfoElementType>Place of birth: </DetailInfoElementType>
                    {person.place_of_birth || "Unknown"}
                  </DetailInfoElement>
                </DetailInfo>
              </Details>
              <MovieDescription>{person.biography}</MovieDescription>
            </StyledLink>
          </StyledMovieDetailsTile>
          <MoviesCastAndCrew personId={id} />
          <Pagination />
        </>
      ) : (
        <NotFound />
      )}
    </FlexCont>
  );
};