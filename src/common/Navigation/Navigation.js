import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMovieSearch} from "../../features/hooks/useMovieSearch";
import {
  MobileContainer,
  NavigationInput,
  NavigationItem,
  NavigationList,
  NavigationTitle,
  NavigationTitleContainer,
  NavigationWrapper,
  SearchIconWrapper,
  StyledSearchIcon,
  StyledVideoIcon,
} from "./styled";
import {StyledNavLink, StyledNavLinkIcon} from "./StyledNavLink/styled";

export const Navigation = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { searchResults } = useMovieSearch(searchQuery);
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    try {
      if (value.trim()) {
        navigate(`/search?query=${encodeURIComponent(value)}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
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
        </NavigationInput>
      </NavigationList>
    </NavigationWrapper>
  );
};