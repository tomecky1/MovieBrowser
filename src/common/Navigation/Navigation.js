import {
  NavigationInput,
  NavigationItem,
  NavigationList,
  NavigationTitle,
  NavigationWrapper,
  SearchIconWrapper,
  StyledSearchIcon,
} from "./styled";
import Video from "../../image/Video.png";
import { StyledNavLink } from "./StyledNavLink/styled";

export function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationList>
        <img src={Video} alt="Logo" />
        <NavigationTitle>Movies Browser</NavigationTitle>
        <NavigationItem>
          <StyledNavLink to="/movies">MOVIES</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink to="/person">PEOPLE</StyledNavLink>
        </NavigationItem>
        <SearchIconWrapper>
          <StyledSearchIcon />
          <NavigationInput
            type="text"
            placeholder={"Search for movies..."}
          ></NavigationInput>
        </SearchIconWrapper>
      </NavigationList>
    </NavigationWrapper>
  );
}
