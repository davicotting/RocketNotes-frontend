    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { Container, Form, Background} from './styles';
    import { Input } from '../../components/Input';
    import { Button } from '../../components/button';

    import { IoIosMail, IoIosLock } from "react-icons/io";
    
    import { useAuth } from '../../hooks/auth';

    

    export function SignIn(){

        const { signIn } = useAuth();

        function handleSignIn(){
            signIn({ email, password });
        }

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

       
        return(
            <Container>
                <Form>
                   <h1>Rocket Notes</h1>
                   <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                    <h2>Faça seu login</h2>
                   <Input 
                   icon={IoIosMail} placeholder={"E-mail"} type="E-mail" onChange={e => setEmail(e.target.value)}/>
                   <Input icon={IoIosLock} placeholder={"Senha"} type="password" onChange={e => setPassword(e.target.value)}/>

                   <Button title={"Entrar"} onClick={handleSignIn}/>

                    <Link to={'/register'}>
                    Criar conta
                    </Link>

    
                </Form>

                

                <Background/>
            </Container>
        )
    }