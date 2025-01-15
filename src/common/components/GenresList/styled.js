import styled from "styled-components";

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: -8px;
`;

export const Genre = styled.li`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.mystic};
  font-weight: 400;
  font-size: 18px;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 10px;
  margin: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}) {
    font-size: 16px;
    line-height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.biggerMobile}) {
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px;
  }
`;
