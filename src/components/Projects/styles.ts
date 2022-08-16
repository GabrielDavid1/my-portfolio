import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
`;

export const Title = styled.h1`
    color: #2f2f2f;
    font-family: 'Bitter';
    padding: 0px 20%;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:10px;
`;

export const Image = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0px 0px 0px 2px;
`;

export const Link = styled.a`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
`;