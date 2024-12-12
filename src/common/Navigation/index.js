import React from "react";
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
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import {MovieList} from "../../features/MovieList";
import {PersonDetails} from "../../features/PersonDetails";
import App from "../../App";

export function Navigation() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <NavigationWrapper>
          <NavigationList>
            <NavLink to={"/"} activeClassName={"active"}> <img src={Video} alt="Logo"/></NavLink>
            <NavigationTitle>Movies Browser</NavigationTitle>
            <NavigationItem><NavLink to={"/movies"} activeClassName={"active"}>MOVIES</NavLink></NavigationItem>
            <NavigationItem><NavLink to={"/person"} activeClassName={"active"}>PEOPLE</NavLink></NavigationItem>
            <SearchIconWrapper>
              <SearchIcon/>
              <NavigationInput type="text" placeholder={"Search for movies..."}></NavigationInput>
            </SearchIconWrapper>
          </NavigationList>
          <Routes>
            <Route exact path={"/movies"} element={<MovieList/>}/>
            <Route path={"/person"} element={<PersonDetails/>}/>
            <Route path={"/"} element={<App/>}/>
          </Routes>
        </NavigationWrapper>
      </HashRouter>
    </>
  );
}
