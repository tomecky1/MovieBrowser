import styled from "styled-components";

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 94px;
    max-width: 100%;
    background-color: #000;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 13px;
        flex-direction: column;
        height: 142px;
    }
`;

export const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    word-break: normal;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 13px;
    }
`;

export const NavigationTitle = styled.li`
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    margin-right: 28px;
    margin-left: 8px;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 13px;
        height: 17px;
        width: 120px;
        margin-right: 8px;
        line-height: 17px;
    }
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
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 13px;
    }

    &:hover {
        border: 1px solid #fff;
        border-radius: 24px;
        cursor: pointer;
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

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 13px;
    }
`;

export const SearchIconWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 33px;
    padding-left: 18px;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 90%;
        height: 44px;
    }
`;

export const VideoIcon = styled.img`
    height: 40px;
    aspect-ratio: 1;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        height: 14px;
        aspect-ratio: 1;
    }
`
