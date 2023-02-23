import {debounce} from 'lodash'

import {
    Container,
    InformationPublications,
    Input
} from './styles'


import {ChangeEvent, useCallback, useContext} from 'react'
import { GitHubContext } from '../../../../context/GitHubContext'


export function InputIssues (){
    const {issues,fetchSearchIssues } = useContext(GitHubContext)
    
    const handlerSearch = useCallback(
        debounce((value) => fetchSearchIssues(value), 1000),
        []
    )
     
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target
        handlerSearch(value)
    }

    
    const IssueSize = issues.length

    return (
        <Container>
            <InformationPublications>
                <p>Publicações</p>
                <span> {IssueSize} publicações</span>
            </InformationPublications>

            <Input>
                <input 
                    required
                    placeholder="Buscar conteúdo"
                    type='text'
                    onChange={handleSearchChange}
                />
            </Input>
        </Container>
    )
}