import { HandleModal } from '../Modal.actions';

describe(`HandleModal`, () => {
    test(`should work correctly`, async () => {
        const result = HandleModal({});

        expect(result).toEqual({
            type: 'HANDLE_MODAL',
            payload: {},
        });
    });
});