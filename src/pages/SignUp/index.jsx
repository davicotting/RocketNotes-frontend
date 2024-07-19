    import { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { Container, Form, Background} from './styles';
    import { Input } from '../../components/Input';
    import { Button } from '../../components/button';

    import { IoIosMail, IoIosLock, IoIosPerson} from "react-icons/io";

    import { api } from '../../services/api';

    import { useAuth } from '../../hooks/auth';

    export function SignUp(){

        console.log(useAuth);
        
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const navigation = useNavigate();

        function handleLogin(){
            if(!name || !email || !password){
                return alert("Ixi deu ruim! Voce tem que preencher todos os campos de cadastro.");
            }

            api.post("/users", {name, email, password})
            .then(() => {
                alert("Usuario cadastrado com sucesso!");
                navigation("/");
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                }else{
                    alert("Nao foi possivel cadastrar o usurio no momento.");
                }
            });
        }
        
        return(
            <Container>



                <Form>
                   <h1>Rocket Notes</h1>
                   <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                    <h2>Crie sua conta</h2>
                    <Input icon={IoIosPerson} placeholder="Nome" type="text" onChange={e => setName(e.target.value)}/>

                    <Input icon={IoIosMail} placeholder={"E-mail"} type="E-mail" onChange={e => setEmail(e.target.value)}/>

                    <Input icon={IoIosLock} placeholder={"Senha"} type="password" onChange={e => setPassword(e.target.value)}/>

                    <Button title={"Cadastrar"} onClick={handleLogin}/>

                   <Link to="/">
                   Voltar para o login
                   </Link>

    
                </Form>

                

                <Background/>
            </Container>
        )
    }