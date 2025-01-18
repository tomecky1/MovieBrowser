import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../../icons/Search.svg";

export const PeopleSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;

  &:focus-within {
    border-color: #000;
  }
`;

export const SearchIconWrapper = styled.input`
  font-size: 16px;
  font-weight: 400;
  border: 0;
  border-radius: 33px;
  line-height: 24px;
  padding: 4px 24px;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16;
    height: 16px;
  }
`;