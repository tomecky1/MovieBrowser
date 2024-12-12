import {
  NavigationInput,
  NavigationItem,
  NavigationList,
  NavigationTitle,
  NavigationWrapper,
  SearchIconWrapper,
  VideoIcon,
} from "./styled";
import video from "../../image/Video.png";
import {ReactComponent as SearchIcon} from "../../icons/Search.svg";

const Navigation =() => {
  return (
    <>
      <NavigationWrapper>
        <NavigationList>
          <VideoIcon src={video} alt="Logo"></VideoIcon>
          <NavigationTitle>Movies Browser</NavigationTitle>
          <NavigationItem>MOVIES</NavigationItem>
          <NavigationItem>PEOPLE</NavigationItem>
        </NavigationList>
        <SearchIconWrapper>
          <SearchIcon/>
          <NavigationInput
            type="text"
            placeholder={"Search for movies..."}
          ></NavigationInput>
        </SearchIconWrapper>
      </NavigationWrapper>
    </>
  );
}

export default Navigation;
