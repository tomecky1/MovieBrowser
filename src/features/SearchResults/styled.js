import styled from "styled-components";
import { ReactComponent as PictureIcon } from "../../icons/Picture.svg";
import { Link } from "react-router-dom";

export const ImageListBlank = styled(PictureIcon)`
  border-radius: 5px;
  height: 434px;
  width: auto;
  background-color: ${({ theme }) => theme.color.silver};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
    margin-right: 16px;
    padding-bottom: unset;
  }
`;

export const StyledPersonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 8px;
    margin-top: 16px;
  }
`;

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 4px 4px 10px #bac7d580;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledPersonLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.lightGray};

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

export const WrapperActorName = styled.div`
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
    font-size: 14px;
  }
`;
