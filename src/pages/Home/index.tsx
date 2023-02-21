import { CardIssues } from "./components/CardIssues";
import { InputIssues } from "./components/InputIssues";
import { Profile } from "./components/Profile";

import {
    HomeContainer, 
    CardContainer
} from './styles'




export function Home (){
    return (
        <HomeContainer>
            <Profile />
            
            <InputIssues />


            <CardContainer>
                <CardIssues/>
                <CardIssues/>

                <CardIssues/>
                <CardIssues/>
            </CardContainer>
        </HomeContainer>
    )
}