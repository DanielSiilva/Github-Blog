import styled from "styled-components";



export const ProfileContainer = styled.div`

    border: 1px solid red;

    display: flex;


    width: 54rem;
    height: 13.25rem;
    margin-top: -70px;

    background: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

`