import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePeopleSearch } from "../hooks/usePeopleSearch";
import {
  StyledPersonWrapper,
  ImageWrapper,
  WrapperActorName,
  StyledPersonLink,
  WrapperItem,
} from "../Person/styled";
import { FlexCont, Text } from "../MovieList/styled";
import Loading from "../../common/Loading";
import NotFound from "../../common/NotFound";
import { Pagination } from "../../common/Pagination";
import posterExample from "../../image/posterExample.png";

const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";

export const getPeopleByQuery = async (query, page, personId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/person/${personId}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching people by query: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return null;
  }
};

export const SearchPeople = ({ query }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { peopleResults } = usePeopleSearch(query);
  const [totalPages, setTotalPages] = useState(1);
  const [people, setPeople] = useState({ results: [] });
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPersonData = async () => {
      if (!query) {
        setPeople({ results: [] });
        setTotalPages(1);
        return;
      }
      try {
        const fetchedData = await fetchPersonData(query, currentPage);
        if (fetchedData) {
          setPeople(fetchedData);
          setTotalPages(Math.min(fetchedData.total_pages, 500));
        } else {
          setPeople({ results: [] });
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError(true);
      }
    };
    fetchPersonData();
  }, [query, currentPage]);

  const handleActorClick = (personId) => {
    navigate(`/person/${personId}`);
  };

  return (
    <FlexCont>
      <Text>Search people for: {query}</Text>
      <StyledPersonWrapper>
        {people.status === "loading" ? (
          <Loading />
        ) : people.status === "error" ? (
          <NotFound />
        ) : people.data?.length > 0 ? (
          people.data.map((person) => (
            <WrapperItem
              key={person.id}
              onClick={() => handleActorClick(person.id)}
              style={{ cursor: "pointer" }}
            >
              <StyledPersonLink to={`/person/${person.id}`}>
                <ImageWrapper>
                  <img
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                        : posterExample
                    }
                    alt={person.name}
                  />
                </ImageWrapper>
                <WrapperActorName>{person.name}</WrapperActorName>
              </StyledPersonLink>
            </WrapperItem>
          ))
        ) : (
          <NotFound />
        )}
      </StyledPersonWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </FlexCont>
  );
};
