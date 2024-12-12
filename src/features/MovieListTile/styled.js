import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../icons/star.svg";

export const StyledMovieDetailsTileList = styled.div`
  max-width: 1368px;
  box-shadow: 4px 4px 10px #bac7d580;
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-gap: 0px;
  align-content: start;
  grid-template-columns: 324px;
  grid-template-rows: auto auto;
  margin-bottom: 50px;
  row-gap: 16px;

  @media (max-width: 1080px) {
    grid-template-columns: 114px auto;
    grid-gap: 16px;
    row-gap: 0px;
    padding: 16px;
    margin: 0 16px 20px 16px;
    column-gap: 16px;
  }
`;


export const IconContainerList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  padding: 16px 16px 0px 16px;
  background-color: ${({ theme }) => theme.color.white};
  grid-column: 1;

  
  @media(max-width: 1080px){
    grid-row: 1;
    padding: 0;
    height: auto;
    width: auto;
  }
`;

export const ImageList = styled.img`
  border-radius: 5px;
  width: 100%;
  margin:0;
  height: 434px;
  width: 292px;
  @media(max-width: 1080px){
    grid-row: 1;
    padding: 0;
    height: 169px;
    width: 114px;
  }
`;

export const DetailsList = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  padding-top: 0px;
  margin: 0;
  padding: 0 16px 16px 16px;

  @media (max-width: 1080px) {
    grid-gap: 8px;
    padding: 0;
  }
`;

export const Header = styled.header`
  font-size: 22px;
  line-height: 29px;
  font-weight: 500;
  padding: 0;
  margin: 0;

  @media (max-width: 1080px) {
    font-size: 16px;
    line-height: 21px;
    padding: 0px;
    weight: 500;
  }
`;

export const YearList = styled.p`
  font-size: 22px;
  margin: 0;

  @media (max-width: 1080px) {
    font-size: 13px;
    line-height: 17px;
    margin-top: -4px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: -8px;
`;

export const TagList = styled.li`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.mystic};
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  border-radius: 5px;
  padding: 8px 8px;
  margin: 4px;

  @media (max-width: 1080px) {
    font-size: 10px;
    line-height: 11px;
    weight: 400;
    padding: 4px;
  }
`;

export const RateList = styled.p`
  display: flex;
  flex-wrap: nowrap;
  color: black;
  margin: 0;
  align-items: flex-end;
  margin-top: 31px;

  @media (max-width: 1080px) {
  flex-wrap: wrap;
  align-items: flex-end;
  margin-top: 0;
  }
`;

export const RateGradeList = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-left: 12px;
  line-height: 24px;
  margin: 0;

  @media (max-width: 1080px) {
  font-size: 13px;
  line-height: 17px;
  margin: 0;
  padding-left: 8px;
  }
`;

export const RateVotesList = styled.p`
  font-size: 16px;
  color: black;
  line-height: 24px;
  margin: 0;
  padding-left: 12px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: 1080px) {
  font-size: 13px;
  line-height: 17px;
  padding-left: 7px;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  vertical-align: baseline;
  align-self: center;

  @media (max-width: 1080px) {
  width: 16px;
  }
`;