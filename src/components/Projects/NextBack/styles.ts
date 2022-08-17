import styled from 'styled-components';

interface Props {
    isLimit:boolean;
}

export const Container = styled.a<Props>`
    cursor:pointer;
    user-select: none;
    transition: .2s;
    opacity: ${props => props.isLimit ? '0.3' : '1'};
`;