import styled from 'styled-components';

const SectionHeader = styled.h2`
    fontSize: 40px;
    color: ${props => props.color};
    fontWeight: 400;
`;

const SectionBody = styled.p`
    color: gray;
    fontSize: 20px;
`;

export { SectionHeader, SectionBody };