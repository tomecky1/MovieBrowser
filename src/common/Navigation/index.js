import {
  NavigationInput,
  NavigationItem,
  NavigationList,
  NavigationTitle,
  NavigationWrapper,
  SearchIconWrapper,
} from "./styled";
import Video from "../../image/Video.png";
import { ReactComponent as SearchIcon } from "../../icons/Search.svg";

export function Navigation() {
  return (
    <>
      <NavigationWrapper>
        <NavigationList>
          <img src={Video} alt="Logo" />
          <NavigationTitle>Movies Browser</NavigationTitle>
          <NavigationItem>MOVIES</NavigationItem>
          <NavigationItem>PEOPLE</NavigationItem>
          <SearchIconWrapper>
            <SearchIcon />
            <NavigationInput
              type="text"
              placeholder={"Search for movies..."}
            ></NavigationInput>
          </SearchIconWrapper>
        </NavigationList>
      </NavigationWrapper>
    </>
  );
}
