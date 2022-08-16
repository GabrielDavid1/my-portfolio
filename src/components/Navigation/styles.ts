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
`;

export const Title = styled.h2`
    color:black;
    padding: 0px 20%;
    text-align: center;
    font-family: 'Bitter', serif;
`;

export const SubTitle = styled.p`
    color:blue;
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
    padding: 10% 0px;
`;

export const ListField = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ListElement = styled.p`
    color:#323030;
    cursor:pointer;
    font-weight: bold;
    font-family: "Roboto";
    transition: .3s;

    &:hover {
        color:#e4ab07;
    }
`;