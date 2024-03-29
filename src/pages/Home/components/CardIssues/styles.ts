import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
   
    width: 26rem;
    height: 16.25rem;
    padding: 2rem;

   
    background: ${props => props.theme['base-post']};
    border-radius: 10px;

    cursor: pointer;

`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    h1{
      
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
       
        color: ${props => props.theme['base-title']};
    }

    span{
    
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
      
        color: ${props => props.theme['base-span']};
    }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    white-space: pre-wrap;
    overflow: hidden;

    
    
    

    p{

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        text-align: justify;
        
        width: 98%;
        
        color: ${props => props.theme['base-text']};
    }

`