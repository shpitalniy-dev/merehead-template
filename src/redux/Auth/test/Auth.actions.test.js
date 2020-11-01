import { sagaOnGetUser } from '../Auth.actions';

describe(`sagaOnGetUser`, () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    test(`should work correctly`, async () => {
        const dispatched = await recordSaga(sagaOnGetUser);

        expect(dispatched).toEqual([
            { type: 'SET_IS_AUTH', payload: true },
            { type: 'SET_AUTH_IS_LOADING', payload: false },
        ]);
    });
});