
import { ArrowSquareOut } from "phosphor-react";
import github from '../../../../assets/github.svg'
import follower from '../../../../assets/user-group-solid.svg'


import { useContext } from "react";
import { GitHubContext } from "../../../../context/GitHubContext";

import { 
    ProfileContainer,
    PhotoUser,
    Information,
    Name,
    Biography,
    UserInformation
} from "./styles";



export function Profile(){
    const {profile} = useContext(GitHubContext)
    
    const {avatar_url, name, html_url, bio, followers, company, login} = profile

    return (
        <ProfileContainer>
            <PhotoUser
                src={avatar_url}
                alt={name}
            />

            <Information>
                
                <Name>
                    <h2>{name}</h2>

                    <a href={html_url}> 
                        github
                        <ArrowSquareOut size={15} weight='bold' />
                    </a>
                </Name>

                <Biography>
                    {bio}
                </Biography>

                <UserInformation>
                    <p> 
                        <img src={github}/>
                        {login}
                    </p>

                    <p>
                        {company} 
                    </p>

                    <p> 
                        <img  src={follower}/>
                        {followers} seguidores
                    </p>
                </UserInformation>
            </Information>
        </ProfileContainer>
    )
}