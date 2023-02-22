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
                <h1>titulo</h1>

                <ProfileInformation>
                    <span>
                        
                    </span>

                    <span>
                        
                    </span>

                    <span>
                        
                    </span>
                </ProfileInformation>

                
            </PostDetails>
        </ProfileContainer>
    )
}