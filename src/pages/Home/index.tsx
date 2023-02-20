import { Profile } from "./components/Profile";

import {
    HomeContainer
} from './styles'




export function Home (){
    return (
        <HomeContainer>
            <Profile />

            <div>
                <h1> Conteudo</h1>
            </div>
        </HomeContainer>
    )
}