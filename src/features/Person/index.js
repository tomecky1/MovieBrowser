import {
  StyledPersonWrapper,
  FlexContainer,
  WrapperItem,
  ImageWrapper,
  Text,
  WrapperActorName,
  StyledPersonLink
} from "./styled";
import posterExample from "../../image/posterExample.png";
import { usePopularActors } from "../hooks/usePopularActors";
import Loading from "../../common/Loading";
import NotFound from "../../common/NotFound";
import { Pagination } from "../../common/Pagination";

export const Person = () => {
  const { popularActor, totalPagesActor, currentPage, error } = usePopularActors();

  return (
    <FlexContainer>
      <Text>Popular people</Text>
      <StyledPersonWrapper>
        {error ? (
          <div>
            <NotFound />
          </div>
        ) : popularActor.status === "loading" ? (
          <div>
            <Loading />
          </div>
        ) : popularActor.data?.length > 0 ? (
          popularActor.data.map((person) => (
            <WrapperItem key={person.id}>
              <StyledPersonLink to={`/person/${person.id}`}>
                <ImageWrapper
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                      : posterExample
                  }
                  alt={person.name}
                />
                <WrapperActorName>{person.name}</WrapperActorName>
              </StyledPersonLink>
            </WrapperItem>
          ))
        ) : (
          <div>
            <NotFound />
          </div>
        )}
      </StyledPersonWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPagesActor}
        onPageChange={(page) => console.log(`Navigate to page: ${page}`)}
      />
    </FlexContainer>
  );
};