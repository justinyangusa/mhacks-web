import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    fontSize: 16px;
    backgroundColor: white;
    border: 3px solid ${props => props.borderColor};
    borderRadius: 5px;
    color: ${props => props.textColor};
`;

export default class OutlineTextField extends React.Component {

    render() {
        return (
            <Wrapper placeholderColor={this.props.placeholderColor}>
                <Input
                    type="text"
                    ref="textField"
                    textColor={this.props.textColor}
                    borderColor={this.props.borderColor}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </Wrapper>
        );
    }
}
