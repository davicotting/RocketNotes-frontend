    
    import { useParams } from 'react-router-dom';
    import { useEffect, useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { Container, Links, Content } from './styles';
    import { Header } from '../../components/header';
    import { Section } from '../../components/section';
    import { Button } from '../../components/button';
    import { ButtonText } from '../../components/buttonText';
    import { Tags } from '../../components/Tags';
    import { api } from '../../services/api';
    

    export function Details(){

        const params = useParams();
        const [data, setData] = useState(null);
        



        const navigate = useNavigate();

        function handdleBackToMenu(){
            navigate(-1);
        }

        async function handdleRemoveNote(){
            const confirm = window.confirm(`Voce realmente deseja excluir essa nota?`);

            if(confirm){
                await api.delete(`/notes/${params.id}`);
                handdleBackToMenu();
            }else{
                return alert("Ixi deu ruim! não foi possivel deletar a sua nota.");
            }
           
        }

        useEffect(() => {

            async function fetchNote(){
                const response = await api.get(`/notes/${params.id}`);

                setData(response.data);
            

            }

            fetchNote();

        }, []);

        return(
            <Container>

                   

                <Header/>

                {
                
                data &&

                <main>

                <Content>

                <ButtonText title={"Excluir nota"} onClick={handdleRemoveNote}/>
                

                <h1>{data.title}</h1>

                <p>

                {
                    data.description
                }

                </p>
                <Section title={"Links úteis"}>
                    <Links>
                    {
                    data.links && data.links.map(link => (
                        <li key={String(link.id)}><a href={link.url} target='_blank'>{link.url}</a></li>
                    ))
                    }
                    </Links>

                </Section>

                <Section title={"Marcadores"}>
                    <div className="tagSpace">
                        {
                            data.tags && data.tags.map(tag => (
                                <Tags 
                                title={tag.name}
                                key={String(tag.id)}
                                />
                            ))
                        }
                    
                    </div>   
                </Section>

                <Button title={"Voltar"} onClick={handdleBackToMenu}/>

                </Content>

                </main>

                }

            </Container>
        )
    }