import { takeEvery } from 'redux-saga/effects';
import types from '../types';
import { sagaOnGetUser } from './Auth.actions'; 

export function* authWatchers() {
    yield takeEvery(types.GET_USER_SAGA, sagaOnGetUser);
}