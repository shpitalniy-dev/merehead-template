import App from '../index';

describe(`App component structure`, () => {
    const initialState = {
        auth: {
            isAuth: true,
            isLoading: false,
        },
        modal: {
            modal: '',
            modalData: {},
        }
    }

    it(`App component create a snapshot, should render correctly`, () => {
        const wrapper = shallowSmart(App, {}, initialState);
        expect(wrapper).toMatchSnapshot();
    });
});