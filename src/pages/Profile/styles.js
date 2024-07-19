
    import { styled } from 'styled-components';

    export const Container = styled.div`
    
    width: 100%;
    
    > header{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        height: 144px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 124px;

        button{
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        svg{
            height: 50px;
            width: 50px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }

    
    
    `;


    export const Form = styled.form`
    margin: 30px auto 0;
    max-width: 340px;

    > div:nth-child(3){
        margin-bottom: 24px;
    }
    
    `

    export const Avatar = styled.div`

    position: relative;
    margin: -124px auto 32px;
    height: 186px;
    width: 186px;

    img {
        border-radius: 50%;
        height: 186px;
        width: 186px;
    }

   

    > label{
        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;
        position: absolute;
        bottom: 7px;
        right: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        cursor: pointer;

        input {
            display: none;
        }

        svg{
            height: 30px;
            width: 30px;

            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }

    
    
    `