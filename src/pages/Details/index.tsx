
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GitHubContext } from '../../context/GitHubContext'
import { Content } from './components/Content'
import { ProfileDetails } from './components/ProfileDetails'


import {
    Container
} from './styles'



export function Details (){
    const {fetchIssuesId, issue} = useContext(GitHubContext)
    const {id} = useParams()
    
    

    useEffect(() =>{
        fetchIssuesId(id!)
    }, [id])

    if(!issue){
        return <></>
    }
    
    
    return(
        <Container>
            <ProfileDetails 
               details={issue}
            />
            <Content 
               body={issue.body}
            />
        </Container>
    )
}