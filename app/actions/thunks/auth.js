import { AuthPureActions } from '../pure';
import { AuthRequests } from '../requests';

export default class AuthThunks {
    static register(name, email, password) {
        return dispatch => {
            dispatch(
                AuthPureActions.registerRequest({ name, email, password })
            );

            return AuthRequests.register({
                full_name: name,
                email,
                password
            }).then(response => {
                if (response.status == 200) {
                    response.json().then(json => {
                        dispatch(
                            AuthPureActions.registerSuccess(
                                {
                                    name,
                                    email,
                                    token: json.token
                                },
                                json.message
                            )
                        );
                    });
                } else {
                    response.json().then(json => {
                        dispatch(
                            AuthPureActions.registerError(
                                email,
                                response.status,
                                json.message
                            )
                        );
                    });
                }
            });
        };
    }

    static login(email, password) {
        return dispatch => {
            dispatch(AuthPureActions.loginRequest({ email, password }));

            return AuthRequests.login({ email, password }).then(response => {
                if (response.status == 200) {
                    response.json().then(json => {
                        dispatch(
                            AuthPureActions.loginSuccess(
                                {
                                    email,
                                    token: json.token
                                },
                                json.message
                            )
                        );
                    });
                } else {
                    response.json().then(json => {
                        dispatch(
                            AuthPureActions.loginError(
                                email,
                                response.status,
                                json.message
                            )
                        );
                    });
                }
            });
        };
    }
}
