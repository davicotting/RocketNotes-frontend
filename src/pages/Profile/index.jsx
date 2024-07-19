    import { useState, useEffect } from 'react';
    import { Link, useNavigate, useRouteLoaderData } from 'react-router-dom';
    import { Container, Form, Avatar } from './styles';
    import { Button } from '../../components/button'
    import { Input } from '../../components/Input';
    import { IoIosArrowRoundBack, IoMdPerson, IoMdMail, IoIosLock, IoIosCamera} from "react-icons/io";

    import { useAuth } from '../../hooks/auth';

    import { api } from '../../services/api';

    import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
    import { ButtonText } from '../../components/buttonText';
    

    export function Profile(){


        const { user, updateProfile } = useAuth();

        const [name, setName] = useState(user.name);
        const [email, setEmail] = useState(user.email);
        const [password_new, setPasswordNew] = useState();
        const [password_old, setPasswordOld] = useState();

        const checkProfile = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

        const [avatar, setAvatar] = useState(checkProfile);
        const [avatarFile, setAvatarFile] = useState(null);

        

        async function handleAvatarUpdate(event){
            const file = event.target.files[0];

            setAvatarFile(file)

            const imagePreview = URL.createObjectURL(file);

            setAvatar(imagePreview);




        }
    
        async function handleProfile(){

            const userIfHaveNoAvatarAlter = {
                name,
                email,
                new_password: password_new,
                old_password: password_old,
            };

            const userWithAvatarAlter = Object.assign(user, userIfHaveNoAvatarAlter);

            await updateProfile({ user: userWithAvatarAlter, avatarFile });

            
        };

        
        const navigate = useNavigate();

        function handdleNavigate(){
            navigate(-1);
        }



        return(
            <Container>
                <header>
                    <button onClick={handdleNavigate} type='button'><IoIosArrowRoundBack/></button>
                </header>

                <Form>

                <Avatar>

                    <img 
                    src={avatar} 
                    alt="Foto do usuario" 
                    />

                    <label htmlFor="avatar">
                        <IoIosCamera/>
                        <input

                        type="file" 
                        id="avatar"
                        onChange={handleAvatarUpdate}

                        />
                    </label>

                </Avatar>

                    <Input icon={IoMdPerson} placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <Input icon={IoMdMail} placeholder="E-mail" type="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>

                    <Input icon={IoIosLock} placeholder="Senha atual" type="password" onChange={e => setPasswordOld(e.target.value)}/>
                    <Input icon={IoIosLock} placeholder="Nova senha" type="password" onChange={e => setPasswordNew(e.target.value)}/>

                    <Button title={"Salvar"} onClick={handleProfile}/>

                </Form>

            </Container>
        )
    }