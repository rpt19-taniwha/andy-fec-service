import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

it('should render without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});



