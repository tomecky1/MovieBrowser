import styled from "styled-components";
// @ts-ignore
import { ReactComponent as Pointer } from './Pointer.svg';

export const Wrapper = styled.section`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin: 40px 0 47px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalS}) {
    gap: 16px;
    margin: 10px auto;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
    margin: 32px
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const ButtonTile = styled.button`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  align-items: center;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.color.scienceBlue};
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 7.5px 12px;
    gap: 4px;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
    background-color: ${({ theme }) => theme.color.mystic};
    cursor: not-allowed;
  }
`;

export const ButtonText = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.mineShaft};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const PointerLeft = styled(Pointer)`
  width: 7px;
  height: 11px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 5px;
    height: 8px;
    }

  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const PointerRight = styled(PointerLeft)`
  transform: rotate(180deg);
`;

export const Counter = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 2px;
  }
`;

export const CounterText = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    
  }
`;

export const CounterNumber = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;