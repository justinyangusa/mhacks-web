import React from 'react';
import styled from 'styled-components';
import { AuthThunks } from '../actions';

import { connect } from 'react-redux';

/* Containers */
const Page = styled.div`
`;

const Form = styled.div`
    backgroundColor: salmon;
    padding: 40px;
    maxWidth: 600px;
    margin: 40px auto;
`;

const RegistrationForm = (props) => (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={props.onSubmit}>
            <label htmlFor="email">
                Email
                <input
                    id="email"
                    type="email"
                    placeholder="hacker@umich.edu"
                    value={props.email}
                    onChange={props.onEmailChange}
                />
            </label>
            <label htmlFor="password">
                Password
                <input
                    id="password"
                    type="password"
                    placeholder="hunter2"
                    value={props.password}
                    onChange={props.onPasswordChange}
                />
            </label>
            <button type="submit">Register</button>
        </form>
    </div>
);

/* Page Component */
class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    passwordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.dispatch(AuthThunks.login(this.state.email, this.state.password));
    }

    render() {
        return (
            <Page>
                <Form>
                    <RegistrationForm
                        email={this.state.email}
                        password={this.state.password}
                        onEmailChange={this.emailChange.bind(this)}
                        onPasswordChange={this.passwordChange.bind(this)}
                        onSubmit={this.onSubmit.bind(this)}
                    />
                </Form>
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.subscribeState,
        theme: state.theme.data
    };
}

export default connect(mapStateToProps)(Login);
