
    
    import { styled } from 'styled-components';

    export const Container = styled.div`

    width: 100%;
    padding: 14px 14px 14px 10px;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    

    > input{
            height: 23px;
            width: 100%;
            padding: 12px;
            color: ${({theme}) => theme.COLORS.WHITE};
            background-color: transparent;
            border: 0;
            outline: 0;
            font-size: 16px;
        

            &::placeholder{
                    color: ${({theme}) => theme.COLORS.GRAY_300};
                    font-size: 14px;
            }
            
    }

    `