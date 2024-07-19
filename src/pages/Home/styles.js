
    import { styled } from 'styled-components';
    import { Link } from 'react-router-dom';

        export const Container = styled.div`

            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-areas: 
            "brand header"
            "menu search"
            "menu content"
            "newnote content";
            grid-template-columns: 250px auto;
            grid-template-rows: 105px 170px auto 64px;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        
        `;

        export const Brand = styled.div`
        
            grid-area: brand;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

            h1{
                 font-size: 24px;
                 color: ${({theme}) => theme.COLORS.ORANGE};
            }
        `;

        export const Menu = styled.ul`
        
            grid-area: menu;

            display: flex;
            flex-direction: column;
            padding: 64px;
            gap: 24px;
            text-align: center;
            font-size: 16px;
            font-weight: 400;

            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

            li{
                list-style: none;
            }


        `;

        export const Search = styled.div`

            grid-area: search;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 60px;
        
        `;

        export const Content = styled.div`
        
            grid-area: content;

            
            padding: 0 54px;
            overflow-y: auto;

            &&::-webkit-scrollbar{
                background-color: ${({theme}) => theme.COLORS.GRAY_300};
                border-radius: 10px;
                width: 12px;
                
            }

            &&::-webkit-scrollbar-thumb{
                background-color: ${({theme}) => theme.COLORS.ORANGE};
                border-radius: 10px;
            }
            
        `;

        export const NewNote = styled(Link)`
        
            grid-area: newnote;

            background-color: ${({theme}) => theme.COLORS.ORANGE};
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};

            border: none;

            color: #232129;

            font-family: "Roboto", sans-serif;
            font-size: 16px;
            font-weight: 500;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            cursor: pointer;
            transition: .3s ease-in-out;
            text-decoration: none;

            &:hover{
                opacity: calc(.8);
            }
            
            svg{
                font-size: 22px;
            }

        `;