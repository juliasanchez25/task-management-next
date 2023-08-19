import styled from '@emotion/styled';
import theme from '@/theme/theme';
import { pxToRem } from '@/utils/px-to-rem';

export const Card = styled.div`
    padding: ${pxToRem(10)} ${pxToRem(25)};
    width: ${pxToRem(304)};
    max-width: 100%;
    height: ${pxToRem(225)};
    max-height: auto;
    background-color: ${theme.background};
    border-radius: 22.69px;
`;

export const Date = styled.h4`
    font-size: ${pxToRem(16)};
    font-weight: 500;
    color: ${theme.title};
`;

export const TaskTitle = styled.h1`
    margin-bottom: 0;
    font-size: ${pxToRem(16)};
    font-weight: 600;
    color: ${theme.title};
`;

export const TaskCurrentStatus = styled.p`
    margin-top: 0;
    font-size: ${pxToRem(16)};
    font-weight: 400;
    color: ${theme.title};
`;

export const ProgressContainer = styled.div`
    margin-top: 0;
    font-size: ${pxToRem(16)};
    font-weight: 400;
    color: ${theme.title};
`;

export const ProgressBar = styled.div<{ animate?: boolean }>`
    height: 100%;
    background-color: ${theme.purple};
    content: "";

    ${({ animate }) => animate && `
        animation: progressBarAnimation 1.5s ease-in-out forwards;
    `}
`;

export const ProgressStatus = styled.div`
    margin-top: -10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p,
    span {
      font-size: ${pxToRem(14)};
      color: ${theme.title};
    }
`;