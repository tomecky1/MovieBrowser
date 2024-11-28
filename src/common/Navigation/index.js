import {
  NavigationWrapper,
  NavigationList,
  NavigationLogo,
  NavigationTitle,
  NavigationItem,
} from "./styled";

export function Navigation() {
  return (
    <>
      <NavigationWrapper>
        <NavigationList>
          <li>
            <NavigationLogo src="./Video.png"></NavigationLogo>
          </li>
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
