import { useContext } from "react";
import { GitHubContext } from "../../../../context/GitHubContext";
import { ProfileContainer } from "./styles";


export function Profile(){
    const {profile} = useContext(GitHubContext)
    const {avatar_url} = profile

    return (
        <ProfileContainer>
            <img src={avatar_url}/>
        </ProfileContainer>
    )
}