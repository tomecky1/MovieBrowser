import styled from "styled-components";

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 94px;
    background-color: #000;
`;

export const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;

export const NavigationTitle = styled.li`
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    margin-right: 28px;
    margin-left: 8px
`;

export const NavigationItem = styled.li`
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    padding: 8px 24px;
    background-color: #000;
    gap: 10px;
    margin-right: 28px;

    &:hover {
        border: 1px solid #fff;
        border-radius: 24px;
    }
`;

export const NavigationInput = styled.input`
    width: 432px;
    border: 0;
    border-radius: 33px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 4px 24px;

    &:active {
        border: 0;
    }
`;

export const SearchIconWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 33px;
    padding-left: 18px;
`
