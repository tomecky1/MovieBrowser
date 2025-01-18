import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom"; // Dodano useLocation
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
  const location = useLocation(); // Hook do sprawdzania aktualnej ścieżki
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

  // Określenie dynamicznego placeholdera na podstawie ścieżki URL
  const currentPlaceholder = location.pathname === "/person"
    ? "Search for people..."
    : "Search for movies...";

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
            placeholder={currentPlaceholder} // Wykorzystanie dynamicznego placeholdera
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </NavigationInput>
      </NavigationList>
    </NavigationWrapper>
  );
};