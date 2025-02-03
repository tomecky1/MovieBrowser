import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledPersonLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s;
`;

export const FlexContainer = styled.div`
  max-width: 1368px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 5px;
    margin-left: 16px;
    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.nextHubMax}) {
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
    margin: 24px 0 16px 0;
  }
`;

export const StyledPersonWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.whisper};
  display: grid;
  grid-template-columns: repeat(6, minmax(208px, 1fr));
  grid-template-rows: repeat(4, minmax(339px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.nextHubMax}) {
    grid-template-columns: repeat(5, minmax(208px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}) {
    grid-template-columns: repeat(4, minmax(208px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalS}) {
    grid-template-columns: repeat(3, minmax(208px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.biggerMobile}) {
    grid-template-columns: repeat(3, minmax(136px, 1fr));
    grid-template-rows: repeat(2, minmax(245px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: repeat(2, minmax(136px, 1fr));
    grid-template-rows: repeat(2, minmax(245px, 0fr));
  }
`;

export const WrapperItem = styled.div`
  padding: 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
    border-radius: 5px;
    box-shadow: 0 4px 12px 0 ${({ theme }) => theme.color.heather};
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const ImageWrapper = styled.img`
  width: 177px;
  height: 264px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 178px;
  }
`;

export const WrapperActorName = styled.p`
  text-align: center;
  padding: 12px 0 35px 0;
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18.2px;
    padding: 8px 0 33px 0;
  }
`;
