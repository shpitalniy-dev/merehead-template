import App from '../index';

describe(`App component structure`, () => {
    it(`App component create a snapshot, should render correctly`, () => {
        const wrapper = shallowSmart(App, {});
        expect(wrapper).toMatchSnapshot();
    });
});