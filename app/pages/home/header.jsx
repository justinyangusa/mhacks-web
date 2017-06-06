import React from 'react';
import styled from 'styled-components';

import { Container } from '../../components';

const HeaderLogoImage = require('../../../static/icons/nano-logo.png');

/* Header Section */
const Wrapper = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;

    display: flex;
    height: 90px;
    alignItems: center;
    justifyContent: flex-start;
`;

const FlexWrapper = styled.div`
    display: flex;
    alignItems: center;
    justifyContent: space-between;
    height: 90%;
`;

const Logo = styled.img`
    height: 90px;
    display: block;
`;

const NavContainer = styled.div`
    display: flex;
    alignItems: center;
    justifyContent: flex-end;
`;

const NavLink = styled.a`
    fontSize: 20px;
    padding: 5px 35px;
    margin: 0px 15px;
    border: 2px solid darkorange;
    color: darkorange;
    borderRadius: 5px;
    textDecoration: none;
    transition: all 0.3s;

    &:hover {
        backgroundColor: darkorange;
        color: white;
    }

    &:last-child {
        margin: 0;
    }
`;

class Header extends React.Component {
    render() {
        const { isLoggedIn, isApplied } = this.props;

        return (
            <Wrapper>
                <Container>
                    <FlexWrapper>
                        <Logo src={HeaderLogoImage} />
                        <NavContainer>
                            {isApplied ?
                                null :
                                <NavLink href="#">Apply</NavLink>
                            }
                            {isLoggedIn ?
                                null :
                                <NavLink href="#">Log In</NavLink>
                            }
                        </NavContainer>
                    </FlexWrapper>
                </Container>
            </Wrapper>
        );
    }
}

export default Header;
