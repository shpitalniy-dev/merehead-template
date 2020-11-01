import { createSelector } from 'reselect';

export const getModal = state => state.modal;

export const getModalName = createSelector(
    getModal,
    modal => modal.modal,
);

export const getModalData = createSelector(
    getModal,
    modal => modal.modalData,
);