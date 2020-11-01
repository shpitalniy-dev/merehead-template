import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducers';
import rootSaga from './rootSagaWatcher';
import interceptors from '../services/axiosInterceptors'
import { getUser } from './Auth/Auth.actions';

const sagaMiddleware = createSagaMiddleware();
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
    : applyMiddleware(thunk, sagaMiddleware);

const store = createStore(rootReducer, enhancer);

interceptors.init(store)
sagaMiddleware.run(rootSaga);

if (sessionStorage.Worder || localStorage.Worder) {
  store.dispatch(getUser());
}

export default store;
