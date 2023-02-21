import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubContext";
import { CardIssues } from "./components/CardIssues";
import { InputIssues } from "./components/InputIssues";
import { Profile } from "./components/Profile";

import {
    HomeContainer, 
    CardContainer
} from './styles'




export function Home (){
    const {issues} = useContext(GitHubContext)



    return (
        <HomeContainer>
            <Profile />
            
            <InputIssues />


            <CardContainer>
                {issues.map((issue)=>{
                    return <CardIssues 
                        key={issue.number}
                        issue = {issue}
                    />
                })}
            </CardContainer>
        </HomeContainer>
    )
}