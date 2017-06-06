import styled from 'styled-components';
import { devices } from '../styles';

const Container = styled.div`
    width: calc(100% - 60px);
    margin: 0 auto;

    ${devices.tablet`
        width: calc(100% - 100px);
    `}

    ${devices.desktop`
        width: calc(100% - 140px);
    `}

    ${devices.giant`
        width: calc(100% - 200px);
    `}
`;

export default Container;
