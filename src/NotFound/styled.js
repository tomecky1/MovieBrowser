import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 20px;
`;


export const Text = styled.header`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 16px;
  align-self: flex-start;
  margin-left: 20px; 
  
  @media (max-width: ${({theme}) => theme.breakpoint.tablet}) {
    text-align: center;
    margin-left: 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
    text-align: center;
    font-size: 26px;
    margin-left: 0;
  }
`;


export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    max-width: 100%; 
    height: auto;
  }
`;
