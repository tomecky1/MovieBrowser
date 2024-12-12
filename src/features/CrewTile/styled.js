import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 336px;

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
  max-width: 1368px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  margin: 64px 0 32px 0;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
    line-height: 24px;
    margin: 24px 0 16px 0px;
  }
`;

export const StyledPersonWrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  background-color: ${({ theme }) => theme.color.whisper};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(339px, 1fr));
  gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(245px, 1fr));
    gap: 16px;
    margin-bottom: 88px;
  }
`;

export const WrapperItem = styled.div`
  padding: 16px 16px 0 16px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 8px 0 8px;
    gap: 8px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.heather};
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
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18.2px;
  }
`;

export const WrapperRole = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.color.darkerGrey};
  padding-bottom: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
    padding-bottom: 8px;
  }
`;
