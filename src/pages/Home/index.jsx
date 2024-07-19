
    import { useNavigate } from'react-router-dom';
    import { Container, Brand, Menu, Search, Content, NewNote} from './styles';
    import { Header } from '../../components/header';
    import { ButtonText } from '../../components/buttonText';
    import { HiOutlinePlusSm } from "react-icons/hi";
    import { Input } from '../../components/Input';
    import { IoSearchSharp } from "react-icons/io5";
    import { Section } from '../../components/section'
    import { Note } from '../../components/Note'
    import { useEffect, useState } from 'react';
    import { api } from '../../services/api';

    export function Home(){

        const navigate = useNavigate();

        const [tags, setTags] = useState([]);
        const [tagsSelected, setTagsSelected] = useState([]);

        const [notes, setNotes] = useState([]);
        const [search, setSearch] = useState("");

        function handdleSelectedTags(tagName){

            if(tagName == "all"){
                return setTagsSelected([]);
            }

            const alreadySelected = tagsSelected.includes(tagName);
            if(alreadySelected){
                setTagsSelected(tagsSelected.filter(tag => tag !== tagName));
            }else{ 
                setTagsSelected(prevState => [...prevState, tagName]);
            }

        
          

        }

        function handdleDetails(id){
            navigate(`/details/:${id}`);
        }

        useEffect(() => {

            async function fetchTags(){
                 const response = await api.get("/tags");

                 setTags(response.data)

            }

            fetchTags();

        }, []);

        useEffect(() => {

            async function fetchNotes(){

                const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);

                setNotes(response.data);

                // console.log(response.data);
                	
            }

            fetchNotes();

        }, [tagsSelected, search]);
        
        return(
            <Container>

                <Brand>

                <h1>Rocketnotes</h1>

                </Brand>

                <Header/>

                <Menu>
                <li>
                <ButtonText 
                title={`Todos`} 
                $isActive={tagsSelected.length === 0}
                onClick={() => handdleSelectedTags("all")}
                />
                </li>

                {
                    tags && tags.map(tag => (
                    <li>
                    <ButtonText 
                      key={String(tag.id)}
                      title={tag.name} 
                      onClick={ () => handdleSelectedTags(tag.name) }
                      $isActive={tagsSelected.includes(tag.name)}
                      />
                      </li>
                    ))
                }
                    
                </Menu>

                <Search>
                    <Input icon={IoSearchSharp} 
                    placeholder="Pesquisar pelo titulo"
                    onChange={(e) => setSearch(e.target.value)}
                    >

                    </Input>
                </Search>

                <Content>
                    <Section title="Minhas Notas">
                        {
                            notes.map(note => (
                                
                                <Note
                                key={String(note.id)}
                                data={note}
                                onClick={(e) => handdleDetails(note.id)}
                                />
                            ))
                        }
                                
                    </Section>
                </Content>

                <NewNote to={"/new"}>
                <HiOutlinePlusSm/> Criar Nota
                </NewNote>



            </Container>
        );
    }