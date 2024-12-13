import styled from "styled-components";
import {NavLink} from "react-router-dom";

const activeClassName = "active";
export const StyledNavLink = styled(NavLink).attrs(() => ({activeClassName}))`
    text-decoration: none;
    color: #fff;
    
    &.${activeClassName} {
        color: #FFF;
        border: 1px solid #FFF;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        padding: 8px 24px;
        background-color: #000;
        gap: 10px;
        margin-right: 28px;
        border-radius: 24px;
        cursor: pointer;
    }
`;
