import styled from "styled-components";

export const StyledMovieDetailsTile = styled.div`
  max-width: 1368px;
  margin: auto;
  box-shadow: 4px 4px 10px #bac7d580;
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-gap: 40px;
  align-content: start;
  margin-top: 64px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
    padding: 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 5px;
  width: 100%;
  height: 464px;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Image = styled.img`
  height: 100%;
  border-radius: 5px;
`;

export const Details = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-gap: 16px;
  }
`;

export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 24px;
  }
`;

export const Year = styled.p`
  font-size: 22px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
    color: ${({ theme }) => theme.color.stormGray};
  }
`;

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: start;
  grid-gap: 8px;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const DetailInfo = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: start;
  grid-gap: 8px;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
  font-weight: 400;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
  }
`;

export const MovieDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const StarIcon = styled.img`
  width: 16px;
  vertical-align: middle;
`;
