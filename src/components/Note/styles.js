
    import styled from "styled-components";

    export const Container = styled.button`

        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        border: none;
        border-radius: 10px;
        margin-bottom: 16px;
        margin-top: 24px;
        padding: 22px;
        cursor: pointer;
        transition: .4s;


        &&:hover{
            scale: calc(.98);
        }
        
    
        h1{
            flex: 1;
            color: ${({theme}) => theme.COLORS.WHITE};
            text-align: left;
            font-weight: 700;
            font-size: 24px;
            
        }

        footer{
            margin-top: 24px;
            display: flex;
            width: 100%;
        }
        
    `