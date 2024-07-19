
    import { styled } from 'styled-components';

    export const Container = styled.span`
    
    width: 64px;
    height: 24px;
    border-radius: 5px;
    padding: 6px 8px;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    cursor: pointer;
    transition: all.4s;
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    margin-right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        opacity: calc(.7);
    }
    
    `