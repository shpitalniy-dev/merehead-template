import { fork, all } from 'redux-saga/effects';
import { authWatchers } from './Auth/Auth.sagas';

const sagas = [
  authWatchers,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
