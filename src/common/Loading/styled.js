import { ReactComponent as Spinner } from "./icon-spinner.svg";
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
  margin: 56px 78px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
    margin: 24px 16px 16px;
  }
`;

export const Loader = styled(Spinner)`
  align-self: center;
  margin-top: 100px;
  animation: spin;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 35px;
    width: 35px;
    margin-top: 24px;
  }
`;
