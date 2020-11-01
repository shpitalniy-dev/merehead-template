import { put, call } from 'redux-saga/effects';
import types from '../types';

export const getUser = () => ({ type: types.GET_USER_SAGA });
export const setIsAuth = payload => ({ type: types.SET_IS_AUTH, payload });
export const setAuthIsLoading = payload => ({ type: types.SET_AUTH_IS_LOADING, payload });

export function* sagaOnGetUser() {
    yield put(setIsAuth(true));
    yield put(setAuthIsLoading(false));
}