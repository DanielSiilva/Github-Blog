import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'



import {
    Container,
    InformationPublications,
    Input
} from './styles'


const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>


export function InputIssues (){


    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

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
                    {...register('query')}
                />
            </Input>
        </Container>
    )
}