import styled from "styled-components";



export const ProfileContainer = styled.div`

    display: flex;
    gap: 1.5rem;

    width: 54rem;
    height: 13.25rem;
    margin-top: -70px;
    padding: 32px 40px;

    background: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

`

export const PhotoUser = styled.img`
    width: 148px;
    height: 148px;
    left: 40px;
    top: calc(50% - 148px/2);

    border-radius: 8px;


`


export const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap:0.8rem;


    width: 100%;

`

export const Name = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        width: 236px;
        height: 31px;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 130%;
        
        color: ${props => props.theme['base-title']};
    }


    a{
        display: flex;
        padding: 0px;
        gap: 8px;

        width: 67px;
        height: 19px;
        
        text-decoration: none;
        text-transform: uppercase;
        
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;
        
        color: ${props => props.theme['blue']};

    }
`


export const Biography = styled.div`
    width: 612px;
    height: 52px;
    left: 220px;
    top: 79px;


    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    
    color: ${props => props.theme['base-text']};


`


export const UserInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    p{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        
        color:  ${props => props.theme['base-subtitle']};

        img{
            width: 18px;
            height: 18px;

        }
    }

`