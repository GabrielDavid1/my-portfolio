import styled from 'styled-components';

interface Props {
    isActive: boolean;
}

export const Container = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-family: 'Bitter';
`;

export const TechnologiesArea = styled.div`
    width:50%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    user-select: none;
    flex-wrap: wrap;
`;

export const ContentArea = styled.div`
    width:50%;
    height:25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TabElement = styled.p<Props>`
    font-family: 'Roboto';
    color: ${props => props.isActive ? 'blue' : '#000'};
    padding: 10px 0px;
    border-bottom: ${(props) => (props.isActive ? '2.5px solid blue' : 'none')};
    cursor:pointer;
    transition: .4s;
`;