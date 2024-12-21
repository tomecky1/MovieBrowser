import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMovieSearch } from "../../features/hooks/useMovieSearch";
import styled from "styled-components";
import {
  NavigationInput,
  NavigationItem,
  NavigationList,
  MobileContainer,
  NavigationTitle,
  NavigationWrapper,
  SearchIconWrapper,
  StyledSearchIcon,
  StyledVideoIcon,
  NavigationTitleContainer,
  StyledNavLinkIcon,
} from "./styled";
import { StyledNavLink } from "./StyledNavLink/styled";

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
`;

const SearchResultItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #f1f1f1;
  }

  img {
    width: 45px;
    height: 67px;
    border-radius: 5px;
  }
`;

export function Navigation() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { searchResults } = useMovieSearch(searchQuery);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleResultClick = (movieId) => {
    navigate(`/movies/${movieId}`);
    setSearchQuery("");
  };

  return (
    <NavigationWrapper>
      <NavigationList>
        <MobileContainer>
          <NavigationTitleContainer>
            <StyledNavLinkIcon to="/">
              <StyledVideoIcon />
            </StyledNavLinkIcon>
            <NavigationTitle>Movies Browser</NavigationTitle>
          </NavigationTitleContainer>
          <NavigationItem>
            <StyledNavLink to="/movies">MOVIES</StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to="/person">PEOPLE</StyledNavLink>
          </NavigationItem>
        </MobileContainer>
        <NavigationInput>
          <StyledSearchIcon />
          <SearchIconWrapper
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchResults.data.length > 0 && searchQuery && (
            <SearchResults>
              {searchResults.data.map((movie) => (
                <SearchResultItem
                  key={movie.id}
                  onClick={() => handleResultClick(movie.id)}
                >
                  {movie.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                    />
                  )}
                  <div>
                    <div>{movie.title}</div>
                    <div style={{ fontSize: "12px", color: "#666" }}>
                      {movie.release_date?.split("-")[0]}
                    </div>
                  </div>
                </SearchResultItem>
              ))}
            </SearchResults>
          )}
        </NavigationInput>
      </NavigationList>
    </NavigationWrapper>
  );
}
