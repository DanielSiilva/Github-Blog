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



export function ProfileDetails(){
    

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
                <h1>JavaScript data types and data structures</h1>

                <ProfileInformation>
                    <span>
                        <img src={github}/>
                        cameronwll
                    </span>

                    <span>
                        <img src={data}/>
                        Há 1 dia
                    </span>

                    <span>
                        <img src={comment}/>
                        5 comentários
                    </span>
                </ProfileInformation>

                
            </PostDetails>
        </ProfileContainer>
    )
}