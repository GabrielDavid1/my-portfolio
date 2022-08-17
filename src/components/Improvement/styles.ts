import styled from 'styled-components';

export const Container = styled.div`
    width:100%; 
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Title = styled.h3`
    padding: 0px 20%;
    font-family: 'Bitter';
`;

export const SubTitle = styled.h4`
    font-family: 'Bitter';
`;

export const Content = styled.div`
    width:50%;
    height:50%;
`;

export const Field = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    gap:10px;
`;

export const Text = styled.p`
    text-align: justify;
    color: #191818;
    font-family: 'Roboto';
`;