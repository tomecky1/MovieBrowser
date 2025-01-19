import styled from "styled-components";

export const MovieRole = styled.p`
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