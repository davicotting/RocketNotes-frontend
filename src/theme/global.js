
    import { createGlobalStyle } from 'styled-components';
    import theme from './theme';

    export default createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        font-family: "Roboto", sans-serif;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    
    `