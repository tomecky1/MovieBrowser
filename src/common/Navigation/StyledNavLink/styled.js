import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeclassname = "active";
export const StyledNavLink = styled(NavLink).attrs(() => ({ activeclassname }))`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};

  &.${activeclassname} {
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.white};
    text-decoration: none;
    margin: 0 16px;
    padding: 8px 24px;
    background-color: ${({ theme }) => theme.color.black};
    border-radius: 24px;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px !important;
    border-radius: 29px !important;
    margin: unset !important;
  }
`;
