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



interface Profile{
    login: string
    title: string
    html_url : string
    created_at: string
    comments:string
}

interface ProfileProps{
    profile: Profile
}

export function ProfileDetails({profile}: ProfileProps){
    

    return (
        <ProfileContainer>
            <HeaderContainer>
                <NavLink to={'/'}>
                    <a> 
                        <CaretLeft size={15} weight='bold' />
                        voltar
                    </a>
                </NavLink>

                <NavLink to={'/'}>
                    <a> 
                        ver no github
                        <ArrowSquareOut size={15} weight='bold' />
                    </a>
                </NavLink>
            </HeaderContainer>

            <PostDetails>
                <h1>{profile.title}</h1>

                <ProfileInformation>
                    <span>
                        <img src={github}/>
                        {profile.login}
                    </span>

                    <span>
                        <img src={data}/>
                        {profile.created_at}
                    </span>

                    <span>
                        <img src={comment}/>
                        {profile.comments} comentários
                    </span>
                </ProfileInformation>

                
            </PostDetails>
        </ProfileContainer>
    )
}