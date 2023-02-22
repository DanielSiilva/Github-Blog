import {
    ProfileContainer,
    HeaderContainer,
    PostDetails,
    ProfileInformation
} from './styles'

import github from '../../../../assets/github.svg'
import data from '../../../../assets/data.svg'
import comment from '../../../../assets/comment.svg'

import {NavLink} from 'react-router-dom'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { useContext } from 'react'
import { GitHubContext } from '../../../../context/GitHubContext'
import {dateFormatter} from '../../../../utils/dateFormatter'

interface Details{
    title: string, 
    html_url:string,
    created_at:string,
    comments:string
}


interface DetailsProps{
    details: Details
}



export function ProfileDetails({details}:DetailsProps){
    const {profile} = useContext(GitHubContext)
    
    const date = dateFormatter(details.created_at)

    return (
        <ProfileContainer>
            <HeaderContainer>
                    <a href='/'> 
                        <CaretLeft size={15} weight='bold' />
                        voltar
                    </a>
                
                    <a href={details.html_url}> 
                        ver no github
                        <ArrowSquareOut size={15} weight='bold' />
                    </a>      
            </HeaderContainer>

            <PostDetails>
                <h1>{details.title}</h1>

                <ProfileInformation>
                    <p>
                        <img src={github} />
                        {profile.login}
                    </p>

                    <p>
                        <img src={data} />
                        {date}
                    </p>

                    <p>
                        <img src={comment} />
                        {details.comments}
                        <span> comentários</span>
                    </p>
                </ProfileInformation>

                
            </PostDetails>
        </ProfileContainer>
    )
}