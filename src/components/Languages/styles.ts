import styled from 'styled-components';

interface Props {
    toggleLanguage: boolean;
}

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap: 10px;
`;

export const Element = styled.p`
    color: ${(props: Props) => props.toggleLanguage ? 'green' : '#960505'};
`;