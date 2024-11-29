import {NavigationItem, NavigationList, NavigationTitle, NavigationWrapper,} from "./styled";
import Video from "../../image/Video.png";

export function Navigation() {
  return (
    <>
      <NavigationWrapper>
        <NavigationList>
          <img src={Video} alt="Logo"/>
          <NavigationTitle>Movies Browser</NavigationTitle>
          <NavigationItem>MOVIES</NavigationItem>
          <NavigationItem>PEOPLE</NavigationItem>
          <li>
            <input type="text" placeholder="Search for movies..."></input>
          </li>
        </NavigationList>
      </NavigationWrapper>
    </>
  );
}
