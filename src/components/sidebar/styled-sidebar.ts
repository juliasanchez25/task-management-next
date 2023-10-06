import styled from 'styled-components';
import { ChevronLeft } from '@mui/icons-material';
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

export const Navigation = styled.nav<{ open?: boolean }>`
  padding-left: ${pxToRem(30)};
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  width: ${pxToRem(200)};
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
  gap: 20px;
  list-style: none;
  color: ${({ theme }) => theme.title};
`;

export const Link = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    font-size: ${pxToRem(15)};
    font-weight: 500;
    color: ${({ theme }) => theme.title};
    overflow: hidden;
    cursor: pointer;
    gap: 10px;
`;
