
    import { styled } from 'styled-components';

    export const Container = styled.button`
    
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    width: 100%;
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    height: 56px;
    padding: 16px ;
    border-radius: 10px;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: .4s ease-in-out;
    
    &:hover{
        scale: calc(.96);
        opacity: calc(.7);
    }


    `