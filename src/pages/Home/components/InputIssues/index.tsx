import {
    Container,
    InformationPublications,
    Input
} from './styles'


export function InputIssues (){

    return (
        <Container>
            <InformationPublications>
                <p>Publicações</p>
                <span> 6 publicações</span>
            </InformationPublications>

            <Input>
                <input 
                    required
                    placeholder="Buscar conteúdo"
                />
            </Input>
        </Container>
    )
}