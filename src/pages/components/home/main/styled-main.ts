import styled from 'styled-components';
import Link from 'next/link';
import { pxToRem } from '@/utils/px-to-rem';

export const Main = styled.main`
  padding: ${pxToRem(10)} ${pxToRem(20)};
  margin-top: ${pxToRem(40)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  width: ${pxToRem(980)};
  background-color: ${({ theme }) => theme.background};

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

export const Name = styled.p`
  margin-bottom: 0;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.description};
`;

export const ViewTasksLink = styled(Link)`
  padding: 0 ${pxToRem(5)};
  text-decoration: solid underline;
  color: ${({ theme }) => theme.purple};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.title};
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${pxToRem(36)};
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;

export const Description = styled.p`
  margin-top: ${pxToRem(8)};
  max-width: ${pxToRem(580)};
  font-size: ${pxToRem(16)};
  font-weight: 400;
  color: ${({ theme }) => theme.description};
`;

