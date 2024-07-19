
    import { styled } from 'styled-components';

    export const Container = styled.button`
    
    color: ${({theme, $isActive}) => $isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100 };

    font-size: 16px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }

    `