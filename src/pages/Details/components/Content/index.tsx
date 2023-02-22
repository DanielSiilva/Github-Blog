
import ReactMarkdown from 'react-markdown'
import {Container} from './styles'

interface DetailsContent{
    body: string
}

export function Content ({body}:DetailsContent){


    return (
        <Container>
            <ReactMarkdown children={body}/>
        </Container>
    )
}