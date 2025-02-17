import styled from "styled-components";
import {NavLink} from "react-router-dom";

const activeclassname = "active";

interface StyledNavLinkProps {
  "activeclassname"?: string;
  "aria-current"?: "page"
}

export const StyledNavLink = styled(NavLink).attrs(():StyledNavLinkProps => ({
  activeclassname,
}))`
    text-decoration: none;
    color: ${({theme}) => theme.color.white};
    border-radius: 24px;
    border: 1px solid ${({theme}) => theme.color.black};
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    padding: 8px 24px;
    transition: transform ease 500ms, border 0.5s ease, margin 0.5s ease;

    &:hover,
    &:active {
        border: 1px solid ${({theme}) => theme.color.white};
        border-radius: 24px;
    }

    &.${activeclassname} {
        color: ${({theme}) => theme.color.white};
        border: 1px solid ${({theme}) => theme.color.white};
        text-decoration: none;
        padding: 8px 24px;
        background-color: ${({theme}) => theme.color.black};
        cursor: pointer;
        border-radius: 24px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        padding: 8px 12px !important;
        border-radius: 29px !important;
        margin: unset !important;
        font-size: 12px;
        line-height: 18px;
    }
`;

export const StyledNavLinkIcon = styled(NavLink)`
    text-decoration: none;
    display: flex;
    cursor: pointer;
`;
