import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
   

    width: 26rem;
    height: 16.25rem;
    padding: 2rem;

   
    background: ${props => props.theme['base-post']};
    border-radius: 10px;

`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

`

export const Title = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;


    h1{
        height: 64px;
        left: 32px;
        right: 101px;
        top: 32px;
       
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
       
        color: ${props => props.theme['base-title']};
    }

    span{
    
        width: 53px;
        height: 22px;
        right: 32px;
        top: 37px;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        white-space: nowrap;

        color: ${props => props.theme['base-span']};
    }

`

export const Content = styled.div`
    left: 32px;
    right: 32px;
    top: 116px;
    bottom: 32px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    
    color: ${props => props.theme['base-text']};

`