import styled from 'styled-components';
import { ChevronLeft } from '@mui/icons-material';
import { pxToRem } from '@/utils/px-to-rem';

export const Container = styled.div`
  padding-top: ${pxToRem(60)};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  overflow-x: hidden;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
`;

export const Navigation = styled.nav<{ open?: boolean }>`
  margin-top: ${pxToRem(20)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  width: ${pxToRem(90)};
  ${({ open }) => open && `width: ${pxToRem(200)}`}
`;

export const Toggle = styled(ChevronLeft)<{ open?: boolean }>`
  transition: transform 0.5s;
  cursor: pointer;
  transform: rotate(180deg);
  color: ${({ theme }) => theme.title};

  ${({ open }) => open && 'transform: rotate(0deg);'}
`;

export const Title = styled.h1<{ open?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(12)};
  background-color: ${({ theme }) => theme.purple};
  color: #ffffff;
  border-radius: 50%;
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const Menu = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  list-style: none;
  color: ${({ theme }) => theme.title};
`;

export const Link = styled.li<{ open?: boolean }>`
  ${({ open, theme }) =>
    open
      ? `
    position: relative;
    display: flex;
    align-items: center;
    font-size: ${pxToRem(20)};
    font-weight: 500;
    color: ${theme.title};
    overflow: hidden;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${theme.purple};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `
      : `
    cursor: pointer;

    svg {
      font-size: ${pxToRem(30)};
    }
  `}
`;
