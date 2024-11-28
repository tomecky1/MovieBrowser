import {
  NavigationWrapper,
  NavigationLogo,
  NavigationTitle,
  NavigationItem,
} from "./styled";

export function Navigation() {
  return (
    <>
      <NavigationWrapper>

          <li>
            <NavigationLogo src="./Video.png"></NavigationLogo>
          </li>
          <NavigationTitle>Movies Browser</NavigationTitle>
          <NavigationItem>MOVIES</NavigationItem>
          <NavigationItem>PEOPLE</NavigationItem>
          <li>
            <input type="text" placeholder="Search for movies..."></input>
          </li>

      </NavigationWrapper>
    </>
  );
}
