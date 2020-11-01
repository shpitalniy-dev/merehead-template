import types from '../types';

const initialState = {
    modal: '',
    modalData: {},
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_MODAL:
            return {
                ...state,
                modal: action.payload?.modal,
                modalData: action.payload?.modalData,
            }
        default:
            return state;
    }
}