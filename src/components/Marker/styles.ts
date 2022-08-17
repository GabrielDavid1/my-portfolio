import styled from 'styled-components';

interface Props {
    isActive:boolean;
}

export const Container = styled.div`
    width:100%;
    position:fixed;
    top:5%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin-left:7%;
    gap:10px;
`;

export const Element = styled.div<Props>`
    width:0.1%; 
    background-color:${props => props.isActive ? '#d1d5d5' : '#fff'};
    border-radius:200px;
    padding:0.8%;
    border: 1px solid gray;
    transition: .5s;
`;