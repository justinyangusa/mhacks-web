import React from 'react';
import styled from 'styled-components';
import { AuthThunks } from '../actions';
import { TabGroup } from '../components';

import { connect } from 'react-redux';

import { routes } from '../constants';

/* Containers */
const Page = styled.div`
`;

const FormContainer = styled.div`
    maxWidth: 600px;
    margin: 40px auto;
`;

const SubmitButton = styled.button`
    padding: 10px 0;
    borderRadius: 20px;
    backgroundColor: transparent;
    color: ${props => props.color};
    fontWeight: 500;
    fontSize: 16px;
    padding: 8px 60px;
    border: 3px solid ${props => props.color};

    &:hover {
        backgroundColor: ${props => props.color};
        color: white;
    }
`;

const Flexer = styled.div`
    display: flex;
    flexDirection: column;
`;

const InputContainer = styled.div`
    margin: 30px 0;

    input {
        width: 100%;
        margin: 10px 0;
        padding: 8px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
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

        this.toggleFormType = this.toggleFormType.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.authState.data.isLoggedIn) {
            this.props.history.push(routes.SUBSCRIBE);
        }
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
                    <TabGroup
                        tabs={[{
                            title: 'Sign Up',
                            onClick: this.toggleFormType
                        }, {
                            title: 'Log In',
                            onClick: this.toggleFormType
                        }]}
                        primaryColor={this.props.theme.primary}
                    />
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <Flexer>
                            <InputContainer>
                                {this.state.isRegistering ?
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Hacker mcHackerface"
                                        value={this.state.name}
                                        onChange={this.handleAttributeChange.bind(this)}
                                    /> :
                                    undefined
                                }
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="hacker@umich.edu"
                                    value={this.state.email}
                                    onChange={this.handleAttributeChange.bind(this)}
                                />
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="hunter2"
                                    value={this.state.password}
                                    onChange={this.handleAttributeChange.bind(this)}
                                />
                            </InputContainer>
                            <ButtonGroup>
                                <SubmitButton
                                    type="submit"
                                    color={this.props.theme.primary}
                                >
                                Confirm
                                </SubmitButton>
                            </ButtonGroup>
                        </Flexer>
                    </form>
                </FormContainer>
            </Page>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.shape({
        history: React.PropTypes.object.isRequired,
    })
};

function mapStateToProps(state) {
    return {
        authState: state.authState,
        theme: state.theme.data
    };
}

export default connect(mapStateToProps)(Login);
