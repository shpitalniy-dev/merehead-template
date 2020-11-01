import { combineReducers } from 'redux'
import { authReducer } from './Auth/Auth.reducer';
import { modalReducer } from './Modal/Modal.reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
})

export default rootReducers
