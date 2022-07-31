import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navigation_bar_01';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
});
