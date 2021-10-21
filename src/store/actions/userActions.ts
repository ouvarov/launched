import { ACTIVE_TYPE } from 'store/const';
import { AuthTypes } from 'store/types';

export const setList = (data: AuthTypes) => ({ type: ACTIVE_TYPE.LOGIN, data });
export const setErrorEmail = () => ({ type: ACTIVE_TYPE.ERROR_EMAIL });
export const setErrorPassword = () => ({ type: ACTIVE_TYPE.ERROR_PASSWORD });
export const cleanError = () => ({ type: ACTIVE_TYPE.CLEAN_ERROR });
