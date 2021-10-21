import { ACTIVE_TYPE } from 'store/const';
import { AuthDataTypes, AuthReduceTypes } from 'store/types';
import { InitialAuthDataState } from 'store/initialStates';

const authReducer = (auth: AuthDataTypes = InitialAuthDataState, action: AuthReduceTypes): AuthDataTypes => {
    switch (action.type) {
        case ACTIVE_TYPE.LOGIN:
            return { ...auth, data: action.data };
        case ACTIVE_TYPE.ERROR_PASSWORD:
            return { ...auth, errorPassword: 'Password is not valid' };
        case ACTIVE_TYPE.ERROR_EMAIL:
            return { ...auth, errorEmail: 'Email is not valid' };
        case ACTIVE_TYPE.CLEAN_ERROR:
            return { ...auth, errorEmail: '', errorPassword: '' };
        default:
            return auth;
    }
};

export default authReducer;
