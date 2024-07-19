
    import { styled } from "styled-components";

    export const Container = styled.section`

    margin: 28px 0;
    

    h2{
        font-size: 20px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        padding-bottom: 16px;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
        margin-bottom: 12px;
    }
    
    
    `