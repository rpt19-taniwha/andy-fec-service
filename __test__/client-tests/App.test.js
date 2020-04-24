import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App.jsx';
import Product from '../../client/src/components/Product.jsx';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

let div;
let wrapped;

beforeEach(() => {
  div = document.createElement("div");
  wrapped = shallow(<App></App>);
})

it('should render without crashing', () => {
  ReactDOM.render(<App></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have 6 instances of Product', () => {
  expect(wrapped.find(Product).length).toEqual(6);
});

