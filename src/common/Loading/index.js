import { Wrapper, Text, Loader } from "./styled";

const Loading = () => {
return (
         <Wrapper>
        <Text>Search results for "Mulan"</Text>
        <Loader/>
      </Wrapper>
)
};

export default Loading;