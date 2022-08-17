import styled from 'styled-components';

export const SvgElement = styled.svg`
    cursor:pointer;
    user-select: none;
    transition: .5s;

    &:nth-child(1):hover {
        fill: #02022d;
        border-radius:50px;
    }

    &:nth-child(2):hover {
        fill: #323205;
        border-radius:50px;
    }
`;