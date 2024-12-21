import styled from "styled-components";

// export const FlexCont = styled.div`
//   max-width: 1368px;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;

//   @media (max-width: 560px) {
//     margin-left: 16px;
//     margin-right: 16px;
//   }
// `;

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
  grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
  grid-template-rows: auto;
  gap: 24px;
  max-width: calc(324px * 4 + 72px); /* Maksymalna szerokość na 4 kolumny + odstępy */

  @media (max-width: 560px) {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    gap: 16px;
    max-width: calc(288px * 2 + 16px); /* Dostosowane do mobilnych */
  }
  margin: 0 auto; /* Wyśrodkowanie */
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
`;

export const MobileDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageList = styled.img`
  border-radius: 5px;
  padding-bottom: 16px;
  width: 292px;
  height: 434px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
    margin-right: 16px;
    padding-bottom: unset;
  }
`;

export const HeaderList = styled.header`
  font-size: 22px;
  line-height: 28.6px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    line-height: 20.8px;
  }
`;

export const MovieRole = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const RateList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  color: black;
  margin: 0;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
    padding-left: 8px;
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
  }
`;

export const RateVotesList = styled.p`
  font-size: 14px;
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
`;