import { AuthPureActions } from '../pure';
import { AuthRequests } from '../requests';

export default class AuthThunks {
    static register(email, password) {
        return dispatch => {
            dispatch(AuthPureActions.registerRequest({ email, password }));

            return AuthRequests.register({ email, password }).then(response => {
                if (response.status == 200) {
                    response.json().then(json => {
                        dispatch(
                            AuthPureActions.registerSuccess(
                                email,
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
}
