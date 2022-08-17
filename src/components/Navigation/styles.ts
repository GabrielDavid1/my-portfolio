import styled from 'styled-components';

export const Container = styled.header`
    display:flex;
    width: 25%;
    height:100%;
    position:fixed;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    background-color: #F4F4F8;
    padding: 3% 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const Title = styled.h2`
    color:black;
    padding: 0px 20%;
    text-align: center;
    font-family: 'Bitter', serif;
`;

export const SubTitle = styled.p`
    color:blue;
    text-align:center;
`;

export const ProfileImageArea = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileImage = styled.img`
    width: 50%;
    border-radius: 100%;    
`;

export const ListArea = styled.div`
    width: 100%;
    height: 100%;
`;

export const ListField = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ListElement = styled.a`
    color:#323030;
    cursor:pointer;
    font-weight: bold;
    font-family: "Roboto";
    transition: .3s;
    margin-top:7%;
    &:hover {
        color:#e4ab07;
    }
    text-decoration: none;
`;