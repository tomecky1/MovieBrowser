import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: 0 auto;
  height: 94px;
  background-color: #000;
`;

export const NavigationList = styled.ul`
  display: inline-flex;
  align-items: center;
`;

export const NavigationTitle = styled.li`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
`;

export const NavigationItem = styled.li`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  padding: 8px 24px;
  background-color: #000;
  gap: 10px;
  &:hover {
    border: 1px solid #fff;
    border-radius: 24px;
  }
`;

export const NavigationLogo = styled.img`
  width: 40px;
  height: 40px;
`;
