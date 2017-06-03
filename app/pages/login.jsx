import React from 'react';
import styled from 'styled-components';
import { AuthThunks } from '../actions';

import { connect } from 'react-redux';

/* Containers */
const Page = styled.div`
`;

const FormContainer = styled.div`
    backgroundColor: salmon;
    padding: 40px;
    maxWidth: 600px;
    margin: 40px auto;
`;

const FormTypeButton = styled.button`

`;

/* Login Component */
class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            isRegistering: true
        };
    }

    // Generic function for changing state
    // -- input using this must have a name attribute
    handleAttributeChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.isRegistering) {
            this.props.dispatch(AuthThunks.register(this.state.name, this.state.email, this.state.password));
        } else {
            this.props.dispatch(AuthThunks.login(this.state.email, this.state.password));
        }
    }

    toggleFormType() {
        this.setState({
            isRegistering: !this.state.isRegistering
        });
    }

    render() {
        return (
            <Page>
                <FormContainer>
                    <h1>Sign Up</h1>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        {this.state.isRegistering ?
                            <label>
                                Name
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Hacker mcHackerface"
                                    value={this.state.name}
                                    onChange={this.handleAttributeChange.bind(this)}
                                />
                            </label> :
                            undefined
                        }
                        <label htmlFor="email">
                            Email
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="hacker@umich.edu"
                                value={this.state.email}
                                onChange={this.handleAttributeChange.bind(this)}
                            />
                        </label>
                        <label htmlFor="password">
                            Password
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="hunter2"
                                value={this.state.password}
                                onChange={this.handleAttributeChange.bind(this)}
                            />
                        </label>
                        <button type="submit">{this.state.isRegistering ? 'Register' : 'Log In'}</button>
                    </form>
                </FormContainer>

                <FormTypeButton onClick={this.toggleFormType.bind(this)}>
                    {this.state.isRegistering ? 'Log In' : 'Register'}
                </FormTypeButton>
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.authState,
        theme: state.theme.data
    };
}

export default connect(mapStateToProps)(Login);
