
    import {styled} from 'styled-components';
    import { Link } from 'react-router-dom';

    export const Container = styled.header`
    
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 45px;
    height: 105px;
    width: 100%;

    svg{
        font-size: 36px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        cursor: pointer;
    }

    `;


    export const User = styled.div`
    
    display: flex;
    align-items: center;
    gap: 10px;
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    `

    export const UserText = styled.div`
    
    display: flex;
    align-items: start;
    flex-direction: column;
    
    h3{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    h2{
        font-size: 18px;
        font-weight: 700;
    }
    
    `

    export const Profile = styled(Link)``
