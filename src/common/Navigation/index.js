import {
  NavigationInput,
  NavigationItem,
  NavigationList,
  NavigationTitle,
  NavigationWrapper,
  SearchIconWrapper,
} from "./styled";
import Video from "../../image/Video.png";
import {ReactComponent as SearchIcon} from "../../icons/Search.svg";
import {HashRouter, Route, Routes} from "react-router-dom";
import {PersonDetails} from "../../features/PersonDetails";
import {MovieDetailsTile} from "../../features/MovieListTile";
import {StyledNavLink} from "./StyledNavLink/styled";

export function Navigation() {
  return (
    <>
      <HashRouter>
        <NavigationWrapper>
          <NavigationList>
            <img src={Video} alt="Logo"/>
            <NavigationTitle>Movies Browser</NavigationTitle>
            <NavigationItem><StyledNavLink to={"/movies"}
            >MOVIES</StyledNavLink></NavigationItem>
            <NavigationItem><StyledNavLink to={"/person"}
            >PEOPLE</StyledNavLink></NavigationItem>
            <SearchIconWrapper>
              <SearchIcon/>
              <NavigationInput type="text" placeholder={"Search for movies..."}></NavigationInput>
            </SearchIconWrapper>
          </NavigationList>
          <Routes>
            <Route path={"/movies"} element={<MovieDetailsTile/>}/>
            <Route path={"/person"} element={<PersonDetails/>}/>
          </Routes>
        </NavigationWrapper>
      </HashRouter>
    </>
  );
}
