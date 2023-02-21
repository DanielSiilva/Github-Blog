import styled from "styled-components";



export const ProfileContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 54rem;
    height: 12rem;
    margin-top: -70px;
    padding: 32px 40px;

    background: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

`
export const HeaderContainer = styled.div`
  
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 19px;

    a{
        display: flex;
        align-items: center;
        gap: 5px;
        
        height: 19px;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;
        
        text-transform: uppercase;
        text-decoration: none;
    
        color: ${props => props.theme['blue']};

    }

`

export const PostDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;



    h1{
   
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
       
        color: ${props => props.theme['base-title']};

    }

`

export const ProfileInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 32px;


    width: 390px;
    height: 26px;
    left: 32px;
    top: 110px;

    
    span{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        white-space: nowrap;

        width: 100%;
        
        color: ${props => props.theme['base-span']};

        img{
            width: 15px;
            height: 15px;
        }
    }

`