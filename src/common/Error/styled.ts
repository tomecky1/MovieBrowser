import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

export const Button = styled.button`
  padding: 16px 24px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 14px;
  line-height: 19px;
  border-radius: 5px;
`;

export const Header2 = styled.h2`
  margin: 0;
`;
