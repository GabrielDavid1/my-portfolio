import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:100%; 
    height:10%;
    justify-content:space-between;
    align-items: center;
    position:fixed;
    background-color: ${(false) ? '#1a1a1a38' : 'transparent'};
    box-shadow: ${(false) ? '1px 1px 6px 0px black' : '0px 0px 0px 0px black'};
    padding: 10px 0px;
`;

export const Title = styled.h2`
    padding: 0px 20%;
    font-family: 'Bitter', serif;
    color:white;
`;

export const List = styled.ul`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    gap:50px;
    margin-right:10%;
`;

export const ListElement = styled.li`
    list-style: none;
    font-weight: bold;
    color:white;
    font-family: Arial;
    cursor:pointer;
    transition: .4s;

    &:hover {
        color:#e4ab07;
    };
`;