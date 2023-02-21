import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'



import {
    Container,
    InformationPublications,
    Input
} from './styles'
import { useContext } from 'react'
import { GitHubContext } from '../../../../context/GitHubContext'


const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>


export function InputIssues (){

    const {issues} = useContext(GitHubContext)
    


    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })


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
                    {...register('query')}
                />
            </Input>
        </Container>
    )
}