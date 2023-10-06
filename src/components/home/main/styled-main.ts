import styled from 'styled-components';
import Link from 'next/link';
import { pxToRem } from '@/utils/px-to-rem';

export const Main = styled.main`
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

export const Name = styled.p`
  margin-bottom: ${pxToRem(8)};
  font-size: ${pxToRem(18)};
  font-weight: 300;
  color: ${({ theme }) => theme.description};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${pxToRem(36)};
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`;

export const Description = styled.p`
  margin-top: ${pxToRem(18)};
  max-width: ${pxToRem(580)};
  font-size: ${pxToRem(18)};
  font-weight: 300;
  color: ${({ theme }) => theme.description};
`;

export const ViewTasksLink = styled(Link)`
  padding: 0 ${pxToRem(5)};
  text-decoration: solid underline;
  color: ${({ theme }) => theme.blue};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.title};
  }
`;
