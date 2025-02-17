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
import {JSX, useCallback} from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }:PaginationProps) => {
  const isMobile = useMediaQuery({ maxWidth: 560 });
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQueryParameter("query");

  const generateURL = useCallback(
    (page: number) => {
      const queryParam = query ? `&query=${query}` : "";
      return `${location.pathname}?page=${page}${queryParam}`;
    },
    [location.pathname, query]
  );

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
      navigate(generateURL(newPage), { replace: true });
    }
  };

  interface renderButtonProps {
      text: string;
      iconLeft: JSX.Element;
      iconRight: JSX.Element;
      disabled: boolean;
      onClick: () => void;
  }

  const renderButton = (onClick:()=>void, disabled:boolean, iconLeft:JSX.Element | null, iconRight:JSX.Element | null, text: string) => (
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