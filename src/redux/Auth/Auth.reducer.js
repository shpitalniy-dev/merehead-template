import types from '../types';

const initialState = {
    isAuth: false,
    isLoading: true,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_IS_AUTH: 
            return {
                ...state,
                isAuth: action.payload,
            }
        case types.SET_AUTH_IS_LOADING: 
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state;
    }
}