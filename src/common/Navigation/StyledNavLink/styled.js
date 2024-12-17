import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  margin: 0 16px;
  padding: 8px 24px;
  border-radius: 24px;
  transition: all 0.3s ease;

  &.active {
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.white};
    text-decoration: none;
    background-color: ${({ theme }) => theme.color.black};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px;
    border-radius: 29px;
  }
`;
