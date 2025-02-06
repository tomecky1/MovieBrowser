import { Wrapper, Text, Loader } from "./styled";

const Loading = ({ type }) => {
  const loadingText =
    type === "movies"
      ? "Search results for popular movies"
      : "Search results for popular people";

  return (
    <Wrapper>
      <Text>{loadingText}</Text>
      <Loader />
    </Wrapper>
  );
};

export default Loading;
