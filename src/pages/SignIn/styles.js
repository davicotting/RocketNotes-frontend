    
    import styled from "styled-components";
    import table from '../../assets/table.svg'

    export const Container = styled.div`

    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    
    
    `

    export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;

    text-align: center;

    > h1{
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > h2{
        font-size: 28px;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    > p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > a{
        color: ${({theme}) => theme.COLORS.ORANGE};
        text-decoration: none;
        margin-top: 124px;

        
    }

    > a:hover{
            text-decoration: underline;
        }
    `

    export const Background = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${table});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(50%);
    `

    

    
