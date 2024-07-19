
    import { Container, User, UserText, Profile } from './styles';
    import { IoMdPower } from "react-icons/io";

    import { useAuth } from '../../hooks/auth';

    import { api } from '../../services/api';

    import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
    import { useNavigate } from 'react-router-dom';



    export function Header(){

        const { logOut, user } = useAuth();

        const navigate = useNavigate();

        const checkProfile = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

        function handdleLogOut(){
            navigate("/");
            logOut();
        }

        return(
            <Container>
                <User>
                    <Profile to={"/profile"}>
                    <img src={checkProfile} alt="" />
                    </Profile>
                    
                    <UserText>
                    <h3>Bem vindo,</h3>
                    <h2>{user.name}</h2>
                    </UserText>

                   
                </User>

                <IoMdPower onClick={handdleLogOut}/>
            </Container>
        )
    }