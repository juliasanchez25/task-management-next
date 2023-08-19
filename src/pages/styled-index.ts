import styled from '@emotion/styled';
import theme from '@/theme/theme';
import { pxToRem } from '@/utils/px-to-rem';

export const Main = styled.main`
    padding: ${pxToRem(20)} ${pxToRem(30)};
    margin-top: ${pxToRem(70)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    width: 80%;
    background-color: ${theme.background};
`;

export const Title = styled.h1`
    margin-bottom: 0;
    font-size: ${pxToRem(40)};
    font-weight: 600;
    color: ${theme.title};
`;

export const Description = styled.p`
    margin-top: ${pxToRem(15)};
    font-size: ${pxToRem(20)};
    font-weight: 400;
    color: ${theme.description};
`;

export const Button = styled.button`
    margin-top: ${pxToRem(15)};
    width: ${pxToRem(280)};
    max-width: 100%;
    height: ${pxToRem(50)};
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${theme.purple};
    color: ${theme.offWhite};
    font-size: ${pxToRem(18)};
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s all ease-in;

    &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(152, 84, 203, 0.8) 0px 5px 15px;
    }

    &:active {
    transform: translateY(0);
    box-shadow: rgba(152, 84, 203, 0.8) 0px 0px 0px;
    }
`;