import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

describe('Render App component', () => {
  it('Should include 1 div with "Hello world!!!" text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe('Hello world!!!');
  });
});
