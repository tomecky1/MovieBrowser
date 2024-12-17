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
} from "./styled";
import { StyledNavLink } from "./StyledNavLink/styled";

export function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationList>
        <MobileContainer>
          <NavigationTitleContainer>
          <StyledVideoIcon />
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
            placeholder={"Search for movies..."}
          ></SearchIconWrapper>
        </NavigationInput>
      </NavigationList>
    </NavigationWrapper>
  );
}
