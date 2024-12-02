import styled from "styled-components";

export const StyledMovieDetailsTile = styled.div`
  max-width: 1368px;
  box-shadow: 4px 4px 10px #bac7d580;
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-gap: 40px;
  align-content: start;
  grid-template-columns: auto 1fr;
  margin: 64px 56px 0 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
    padding: 16px;
    margin: 16px 16px 21px 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 5px;
  padding: 40px 0px 40px 40px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 312px;
  height: 464px;
`;

export const Details = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  padding-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 16px;
  }
`;

export const Header = styled.header`
  font-size: 36px;
  font-weight: 600;
  padding: 8px 0 0 0;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const Year = styled.p`
  font-size: 22px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    color: ${({ theme }) => theme.color.stormGray};
  }
`;

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: start;
  grid-gap: 24px;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  //padding-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const DetailInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  grid-gap: 8px;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: -8px;
`;

export const Tag = styled.li`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.mystic};
  font-weight: 400;
  font-size: 18px;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 10px;
  margin: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Rate = styled.p`
  display: flex;
  flex-wrap: nowrap;
  font-size: 22px;
  color: black;
  line-height: 28.6px;
  margin: 0;
  align-items: baseline;
`;
export const RateGrade = styled.p`
  font-size: 22px;
  padding-left: 8px;
  line-height: 29px;
  margin: 0;
`;
export const RateElement = styled.p`
  font-size: 14px;
  color: black;
  line-height: 17px;
  margin: 0;
  justify-content: end;
  padding-left: 8px;
`;

export const RateVotes = styled.p`
  font-size: 14px;
  color: black;
  line-height: 17px;
  margin: 0;
  padding-left: 12px;
`;

export const MovieDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  padding-bottom: 40px;
  padding-right: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const StarIcon = styled.img`
  width: 24px;
  vertical-align: baseline;
  align-self: center;
`;
