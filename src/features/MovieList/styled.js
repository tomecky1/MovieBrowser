import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../icons/star.svg";
import { Link } from "react-router-dom";
import css from "styled-components";

export const FlexCont = styled.div`
  max-width: 1368px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom:50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.nextHubMax}) {
    margin-left: 36px;
    margin-right: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Text = styled.header`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  margin: 56px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
    line-height: 24px;
    margin: 24px 0 12px 0px;
  }
`;

export const StyledMovieDetailsTileList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(324px, 1fr));
  grid-auto-rows: minmax(680px, 1fr);
  gap: 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.nextHubMax}) {
    grid-template-columns: repeat(3, minmax(324px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}) {
    grid-template-columns: repeat(3, minmax(268px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalS}) {
    grid-template-columns: repeat(2, minmax(324px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.biggerMobile}) {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    grid-auto-rows: minmax(auto, 1fr);
  }
`;

export const IconContainerList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px #bac7d580;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: flex-start;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const ImageList = styled.img`
  border-radius: 5px;
  height: 434px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
    margin-right: 16px;
    padding-bottom: unset;
  }
`;

export const MovieDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  justify-content: space-between;
`;

export const HeaderList = styled.header`
  font-size: 22px;
  line-height: 28.6px;
  font-weight: 500;
  padding-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    line-height: 20.8px;
    padding-top: 0;
  }
`;

export const YearList = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: 0;
  padding-bottom: 31px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: unset;
  }
`;

export const TagList = styled.li`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.mystic};
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
  border-radius: 5px;
  padding: 8px 16px;
  margin: 0 8px 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px;
  }
`;

export const RateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  margin: 0;
  align-items: baseline;
  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
    margin-top: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iPhoneSE}) {
    font-size: 13px;
    line-height: 16.9px;
    margin-top: 0;
  }
`;

export const RateGradeList = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  padding-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
    padding-left: 8px;
    word-break: keep-all;
  }
  ${({ votes }) => votes && css`
      padding-left: 0;
    `}
`;

export const RateVotesList = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: black;
  line-height: 24px;
  margin: 0;
  padding-left: 12px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
    padding-left: 7px;
  }
  ${({ votes }) => votes && css`
      padding-left: 0;
    `}
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  height: 22.87px;
  vertical-align: baseline;
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 15.25px;
    align-self: normal;
  }
  ${({ hidden }) => hidden && css`
    width: 0;
    display: unset;
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: contents;
`;