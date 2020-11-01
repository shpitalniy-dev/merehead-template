import { mount, shallow, configure } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import localStorage from 'localStorage';
import fetch from 'jest-fetch-mock';
import { runSaga } from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from 'redux-mock-store'
import rootReducer from './src/redux/rootReducers';

const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><head></head><body></body></html>`);

global.window = dom.window;
global.document = dom.window.document;

global.navigator = {
  userAgent: 'node.js',
  javaEnabled: () => true,
};

global.localStorage = localStorage;

global.fetch = fetch;

// ------------------
// React
// ------------------
global.React = React;
global.ReactDOM = ReactDOM;
global.PropTypes = PropTypes;

// ------------------
// Sinon
// ------------------
global.sinon = sinon;

// ------------------
// Enzyme
// ------------------
configure({ adapter: new Adapter() });
global.mount = mount;
global.shallow = shallow;

// Create store
const store = createStore(rootReducer);

global.createSnapshot = Component => {
  const wrapper = shallow(Component);
  expect(wrapper).toMatchSnapshot();
};

global.shalowRender = Component => {
  return shallow(Component);
};

global.mountRender = Component => {
  return mount(Component);
};

global.shallowSmart = (Component, props, initialState = {}) => {
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const mockProps = { ...props };

  const wrapper = <Provider store={store}><Component {...mockProps} /></Provider>;

  return renderer.create(wrapper).toJSON();
};

global.recordSaga = async (saga, initialAction) => {
    const dispatched = [];

    await runSaga(
        {
            getState: () => store,
            dispatch: action => dispatched.push(action),
        },
        saga,
        initialAction
    ).toPromise();

    return dispatched;
};