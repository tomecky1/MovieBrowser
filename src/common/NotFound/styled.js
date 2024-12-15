import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1368px;
  margin: 0 auto;
`;

export const Text = styled.header`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  margin: 56px 78px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
    margin: 24px 16px 16px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width: 50%;
  }
  }
`;
