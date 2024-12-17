import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeclassname = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeclassname }))`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  /* margin: 0 16px;
  padding: 8px 24px;
  border-radius: 24px;
  transition: all 0.3s ease; */

  &.${activeclassname} {
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.white};
    text-decoration: none;
    margin: 0 16px;
    padding: 8px 24px;
    background-color: ${({ theme }) => theme.color.black};
    cursor: pointer;
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px !important;
    border-radius: 29px !important;
    margin: unset !important;
  }
`;
