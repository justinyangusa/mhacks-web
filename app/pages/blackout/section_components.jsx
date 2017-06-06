import styled from 'styled-components';
import { devices } from '../../styles';

const SectionHeader = styled.h2`
    fontSize: 50px;
    textTransform: uppercase;
    color: ${props => props.theme.teal};
    textShadow: 0px 0px 50px ${props => props.theme.teal};
`;

const SectionBody = styled.p`
    color: white;
    fontSize: 20px;
`;

const Container = styled.div`
    width: calc(100% - 60px);
    maxWidth: 1200px;
    margin: 0 auto;

    ${devices.tablet`
        width: calc(100% - 100px);
    `}

    ${devices.desktop`
        width: calc(100% - 140px);
    `}

    ${devices.giant`
        width: calc(100% - 160px);
    `}
`;

export { SectionHeader, SectionBody, Container };
