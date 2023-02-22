
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import {dateFormatter} from '../../../../utils/dateFormatter'

import { 
    CardContainer,
    Title,
    TitleContainer,
    Content
} from "./styles";

interface Issue {
    title: string
    body: string
    created_at: string
    html_url: string
    number: string
    comments: string
    login: string
}

interface IssueProps {
    issue: Issue
}


export function CardIssues ({issue}: IssueProps){
    const navigate = useNavigate()

    
    
        
  return(
    <CardContainer>
        <TitleContainer>
            <Title>
                <h1>{issue.title}</h1>
                <span>{dateFormatter(issue.created_at)}</span>
            </Title>

            <Content>
                <ReactMarkdown children={issue.body}/>
            </Content>

        </TitleContainer>
    </CardContainer>
  )  

}