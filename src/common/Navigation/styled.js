import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../icons/Search.svg";

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    flex-direction: column;
    height: 142px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 94px;
  max-width: 1368px;
  width: 100%;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: 142px;
  }
`;

export const NavigationTitle = styled.li`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

export const NavigationItem = styled.li`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;


export const NavigationInput = styled.input`
  border: 0;
  border-radius: 33px;
  line-height: 24px;
  padding: 4px 24px;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    font-size: 13px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.biggerMobile}) {
    margin-right: 36px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  align-self: center;
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 33px;
  padding-left: 18px;
  height: 48px;
  max-width: 432px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 0;
  }
`;

export const VideoIcon = styled.img`
  height: 40px;
  aspect-ratio: 1;
  margin-right: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 24px;
    aspect-ratio: 1;
  }
`;