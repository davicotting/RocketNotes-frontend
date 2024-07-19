
    import { Link, useNavigate } from 'react-router-dom';
    import { Header } from '../../components/header';
    import { Container, Form } from './styles';
    import { Input } from '../../components/Input';
    import { Section } from '../../components/section';
    import { NoteItem } from '../../components/NoteItem';
    import { TextArea } from '../../components/TextArea';
    import { Button } from '../../components/button';
    import { useState } from 'react';
    import { api } from '../../services/api';
    import { ButtonText } from '../../components/buttonText';

    export function New(){

        const navigate = useNavigate()

        function handdleNavigate(){
            navigate(-1)
        }

        const [links, setLinks] = useState([]);
        const [newLink, setNewLink] = useState("");

        const [tags, setTags] = useState([]);
        const [newTag, setNewTag] = useState("");

        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");

        function handdleAddLink(){
            setLinks(prevState => [...prevState, newLink]);
            setNewLink("");
        };

        function handdleRemoveLink(deleted){
            setLinks(prevState => prevState.filter((link) => link !== deleted));
        };

        function handdleAddTag(){
            setTags(prevState => [...prevState, newTag]);
            setNewTag("");
        }

        function handdleRemoveTag(deleted){
            setTags(prevState => prevState.filter((tag) => tag !== deleted))
        }

        async function handdleCreateNote(){

            if(!title){
                return alert("Voce nao preencheu o titulo. Preencha o campo e tente novamente!");
            }

            if(newLink){
                return alert("Voce esqueceu de adicionar um novo link. Clique no botao de adicionar!");
            }

            if(newTag){
                return alert("Voce esqueceu de adicionar uma nova tag. Clique no botao de adicionar!");
            }


            await api.post("/notes", {
                title,
                description,
                tags,
                links
            });

            handdleNavigate();
        }

        return(
            <Container>

                <Header/>

                <main>
                    <Form>
                        <header>
                            <h1>Criar nota</h1>
                            <ButtonText onClick={handdleNavigate} title={"Voltar"} />
                        </header>

                        <Input placeholder="Título" icon={false} onChange={e => setTitle(e.target.value)}>
                        
                        </Input>

                        <TextArea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

                        <Section title='Links uteis' >
                            
                            {
                            links.map((link, index) => (

                            <NoteItem 
                            key={index}
                            value={link}
                            onChange={ e => setNewLink(e.target.value) } 
                            onClick={ () => handdleRemoveLink(link) }
                            />  ))
                            }                    

                            <NoteItem 
                            $isNew 
                            placeholder={"Novo link"} 
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)} 
                            onClick={handdleAddLink}
                            />
                            
                        </Section>

                        <Section title="Marcadores">

                            <div className="tags">

                            {
                                tags.map((tag, index) => (
                                    <NoteItem value={tag} key={index} onClick={() => { handdleRemoveTag(tag)} } />
                                ))
                            }
                        
                            <NoteItem $isNew placeholder={"Nova tag"} onClick={handdleAddTag} onChange={e => setNewTag(e.target.value)} value={newTag}/>
                            </div>
                        </Section>

                        <Button title="Salvar" onClick={handdleCreateNote}>

                        </Button>
                    </Form>
                </main>

            </Container>
        )
    }