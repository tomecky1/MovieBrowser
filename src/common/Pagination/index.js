import {
  ButtonsContainer,
  ButtonText,
  ButtonTile,
  Counter,
  CounterNumber,
  CounterText,
  PointerLeft,
  PointerRight,
  Wrapper,
} from "./styled";
import { useQueryParameter } from "../components/Search/useQueryParameter";
import { useMediaQuery } from "react-responsive";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isMobile = useMediaQuery({ maxWidth: 560 });
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQueryParameter("query");

  const generateURL = useCallback(
    (page) => {
      const queryParam = query ? `&query=${query}` : "";
      return `${location.pathname}?page=${page}${queryParam}`;
    },
    [location.pathname, query]
  );

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
      navigate(generateURL(newPage), { replace: true });
    }
  };

  const renderButton = (onClick, disabled, iconLeft, iconRight, text) => (
    <ButtonTile onClick={onClick} disabled={disabled}>
      {isMobile ? (
        <>
          {iconLeft}
          {iconRight}
        </>
      ) : (
        <>
          {(text === "First" || text === "Previous") && iconLeft}
          {(text === "Last" || text === "Next") && iconRight}
        </>
      )}
      {!isMobile && <ButtonText>{text}</ButtonText>}
    </ButtonTile>
  );

  return (
    <Wrapper>
      <ButtonsContainer>
        {renderButton(
          () => changePage(1),
          currentPage === 1,
          <PointerLeft />,
          <PointerLeft />,
          "First"
        )}
        {renderButton(
          () => changePage(currentPage - 1),
          currentPage === 1,
          <PointerLeft />,
          null,
          "Previous"
        )}
      </ButtonsContainer>
      <Counter>
        <CounterText>Page</CounterText>
        <CounterNumber>{currentPage}</CounterNumber>
        <CounterText>of</CounterText>
        <CounterNumber>{totalPages}</CounterNumber>
      </Counter>
      <ButtonsContainer>
        {renderButton(
          () => changePage(currentPage + 1),
          currentPage === totalPages,
          null,
          <PointerRight />,
          "Next"
        )}
        {renderButton(
          () => changePage(totalPages),
          currentPage === totalPages,
          <PointerRight />,
          <PointerRight />,
          "Last"
        )}
      </ButtonsContainer>
    </Wrapper>
  );
};