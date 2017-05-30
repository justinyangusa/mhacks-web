import { reduxActions } from '../../constants';

export default class AuthPureActions {
    static registerRequest(data) {
        return {
            type: reduxActions.REGISTER_REQUEST,
            data
        };
    }

    static registerError(data, error, message) {
        return {
            type: reduxActions.REGISTER_ERROR,
            data,
            error,
            message
        };
    }

    static registerSuccess(data, message) {
        return {
            type: reduxActions.REGISTER_SUCCESS,
            data,
            message
        };
    }
}
