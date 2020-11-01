import { createSelector } from 'reselect';

export const getAuth = state => state.auth;

export const getIsAuth = createSelector(
    getAuth,
    auth => auth.isAuth,
);

export const getAuthIsLoading = createSelector(
    getAuth,
    auth => auth.isLoading,
);