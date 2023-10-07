import styled from 'styled-components';
import { pxToRem } from '@/utils/px-to-rem';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const Navigation = styled.nav`
  padding-left: ${pxToRem(30)};
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  width: ${pxToRem(200)};
`;

export const Logo = styled.div`
  margin: ${pxToRem(30)} 0;
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};

  h3 {
    font-size: ${pxToRem(16)};
    font-weight: 500;
    color: ${({ theme }) => theme.title};
  }
`;

export const RocketIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(12)};
  background-color: ${({ theme }) => theme.blue};
  color: #ffffff;
  border-radius: 50%;
  width: ${pxToRem(12)};
  height: ${pxToRem(12)};
`;

export const Menu = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  color: ${({ theme }) => theme.title};
`;

export const Link = styled.li<{ subItems?: boolean; }>`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${pxToRem(15)};
  font-weight: 500;
  color: ${({ theme }) => theme.title};
  overflow: hidden;
  cursor: pointer;
  gap: 10px;
  transition: 0.2s all ease-in-out;
  pointer-events: ${({ subItems }) => !subItems ? 'all' : 'none'};

  &:hover {
      color: ${({ theme }) => theme.lightBlue};
  }
`;

export const SubItems = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.2s all ease-in-out;
  cursor: pointer;

  div {
    padding: ${pxToRem(5)} ${pxToRem(10)} ${pxToRem(15)};
    display: flex;
    justify-content: space-between;
    align-items: end;
    border-radius: 5px 5px 5px 5px;

    &:hover {
      background-color: ${({ theme }) => theme.linkHover};
    }
  };

    p {
      margin: 0;
      font-size: ${pxToRem(15)};
      max-width: ${pxToRem(150)};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:first-child {
        margin-top: 10px;
      }
  }
`;
