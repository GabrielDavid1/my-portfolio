import styled from 'styled-components';

export const Container = styled.div`
    width:100%; 
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const ProfileArea = styled.div`
    width:100%;
    height:100%;
    padding: 0px 10%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ProfileTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
`;

export const ProfileText = styled.h3`
    color: #323030;
    font-family: 'Montserrat',sans-serif;
    font-size: 2rem;
    line-height: 1.3;
    text-align: center;   
`;

export const ProfileImage = styled.img`
    width: 25%;
    height: 0%;
    float: left;
    padding: 0px 5%;
    border-radius: 100%;    
`;