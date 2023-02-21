import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 8px;

    width: 864px;
    
   

    
`


export const InformationPublications = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    p{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        font-size: 1.125rem;
        color: ${props => props.theme['base-subtitle']};
    }

    span{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        text-align: right;
        color: ${props => props.theme['base-span']};

    }

`

export const Input = styled.form`


    input{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 16px;
        gap: 8px;

        
        width: 864px;
        height: 50px;
        

        background: ${props => props.theme['base-input']};
        
        border: 1px solid ${props => props.theme['base-border']};
        border-radius: 6px;

        color: white;
    }
`