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
    justify-content:center;
    align-items:center;
`;

export const ProfileText = styled.h2`
    color:#323030;
    font-family: 'Roboto', sans-serif;
    font-size:2rem;
    text-align: start;
    line-height: 1.3;
`;

export const ProfileImage = styled.img`
    width: 25%;
    height: 0%;
    float: left;
    padding: 0px 5%;
    border-radius: 100%;    
`;

export const ImageArea = styled.img`
    width:20%;
    float:left;
    padding: 2%;
    border-radius:10%;
`;