
    import { Container } from './styles'


    export function Button({title, onClick, ...rest}){
        return(
            <Container
            type='button'
            onClick={onClick}
            {...rest}
            >
                {title}
            </Container>
        )
    }