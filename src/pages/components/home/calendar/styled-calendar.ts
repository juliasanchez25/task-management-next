import styled from 'styled-components';

export const Title = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
`;
