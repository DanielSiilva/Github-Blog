import { 
    CardContainer,
    Title,
    TitleContainer,
    Content
} from "./styles";



export function CardIssues (){

        
  return(
    <CardContainer>
        <TitleContainer>
            <Title>
                <h1> JavaScript data types and data structures</h1>

                <span> Há 1 dia</span>
            </Title>

            <Content>
                <p>
                    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in... 
                </p>
            </Content>

        </TitleContainer>
    </CardContainer>
  )  

}