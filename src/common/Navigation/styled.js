import styled from "styled-components";

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 94px;
    max-width: 100%;
    background-color: #000;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) and (max-width: ${({theme}) => theme.breakpoints.tabletVertical}) {
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
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) and (max-width: 1199px) and (max-width: 375px) {
        font-size: 13px;
        padding-left: 0;
    }
`;

export const NavigationTitle = styled.li`
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    margin-right: 28px;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) and (max-width: 1024px) {
        font-size: 13px;
        height: 17px;
        line-height: 17px;
        margin-left: 0;
        margin-right: 0;
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
    @media (max-width: ${({theme}) => theme.breakpoints.tabletVertical}) {
        font-size: 13px;
        margin-right: 0;
        padding: 8px 16px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.smallMobile}) and (max-width: 1024px) {
        padding: none;
    }

    &:hover {
        border: 1px solid #fff;
        border-radius: 24px;
        cursor: pointer;
    }
`;

export const NavigationInput = styled.input`
    border: 0;
    border-radius: 33px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 4px 24px;

    &:active {
        border: 0;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tabletVertical}) {
        font-size: 13px;
        width: auto;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.biggerMobile}) {
        margin-right: 36px;
    }
`;

export const SearchIconWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 33px;
    padding-left: 18px;
    @media (max-width: ${({theme}) => theme.breakpoints.tabletVertical}) {
        width: 80%;
        height: 44px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.biggerMobile}) {
        margin-right: 36px;
    }
`;

export const VideoIcon = styled.img`
    height: 40px;
    aspect-ratio: 1;
    margin-right: 8px;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        height: 24px;
        aspect-ratio: 1;
    }
`
