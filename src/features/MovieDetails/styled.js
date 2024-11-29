import styled from "styled-components";

export const StyledMovieDetailsTile = styled.div`
    max-width: 1368px;
    margin: auto;
    box-shadow: 4px 4px 10px #BAC7D580;
    background-color: ${({ theme }) => theme.color.white};
    display: grid;
    grid-gap: 40;
    align-content: start;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: image;
    border-radius: 5px;
    width: 100%;
    height: 464px;

`;

export const Image = styled.img`
    grid-area: image;
    width: 100%;
    border-radius: 5px;
`;

export const Details = styled.div`
    display: grid;
    grid-area: details;
    grid-gap: 24px;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
`;

export const Header = styled.header`
    font-size: 36px;
    font-weight: 600;
`;

export const Year = styled.p`
    font-size: 22px;
    margin: 0;
`;

export const DetailContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: start;
    grid-gap: 8px;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 22xxpx;
`;
export const DetailInfo = styled.p`
    margin: 0;

`;

export const Label = styled.span`
    color: ${({theme}) => theme.color.stormGray};
    font-weight: 400;
    font-size: 18px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    };
`;

export const MovieDescription = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
    grid-area: description;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
    };
`;
