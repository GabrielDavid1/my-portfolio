import styled from 'styled-components';

interface Props {
    opacity: string;
}

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
    width: 50%;
    color: #2f2f2f;
    font-family: 'Bitter';
`;

export const Description = styled.p`
    color: #2f2f2f;
    font-style: italic;
    width: 50%;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:5%;
`;

export const Image = styled.img<Props>`
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0px 0px 15px 0px;
    user-select: none;
    transition: 0.3s;
    opacity: ${props => props.opacity};
`;

export const Link = styled.a`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
`;