
import ReactMarkdown from 'react-markdown'
import {Container} from './styles'

interface ContentProps{
    content:string
}

export function Content ({content}: ContentProps){


    return (
        <Container>
           <ReactMarkdown children={content}/>
        </Container>
    )
}