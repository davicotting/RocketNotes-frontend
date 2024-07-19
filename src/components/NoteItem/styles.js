
    import styled from "styled-components";

    export const Container = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_900 };
    color: ${({theme}) => theme.COLORS.GREY_300};
    border: ${({theme, $isNew}) => $isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none" };
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    input{
        padding: 12px;
        height: 56px;
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: transparent;
        border: none;
        outline: none;
        font-family: "Roboto", sans-serif;
        

        
        
    }

    > button{
        border: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            height: 32px;
            width: 32px;

            color: ${({theme, $isNew}) => $isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
        }

    }

    
    `

    