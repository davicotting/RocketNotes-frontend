
    import { styled } from 'styled-components';

    export const Container = styled.div`
    
    display: grid;
    grid-template-areas: 
    "header"
    "content";
    height: 100vh;
    width: 100%;

    
    

    > main{
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }

    `

    export const Links = styled.ul`
    a{
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        
    }

    li{
        margin-bottom: 12px;
        list-style: none;
    }
    
    
    `

    export const Content = styled.div`
    
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;


    h1{
        font-weight: 500;
        font-size: 36px;
        padding-top: 64px;
    }

    p{
        font-weight: 400;
        font-size: 16px;
        text-align: justify;
        margin-top: 16px;
    }

    > button:first-child{
        align-self: end;
    }

    .tagSpace{
        display: flex;
        
    }

    
    `

    