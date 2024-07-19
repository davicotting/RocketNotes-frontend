
    import { IoIosAdd, IoIosClose } from "react-icons/io";
    import { Container } from './styles';

    export function NoteItem( { $isNew = false, value, onClick, ...rest} ){
        return(
            <Container $isNew={$isNew}>

                <input 
                type="text" 
                value={value}
                readOnly={!$isNew}
                {...rest}
                />

                <button

                onClick={onClick} 
                type="button"

                >
                    { $isNew ? <IoIosAdd/> : <IoIosClose/> }

                </button>


            </Container>
        )
    }

