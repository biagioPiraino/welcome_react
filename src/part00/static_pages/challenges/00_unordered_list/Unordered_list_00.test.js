import React from 'react';
import ReactDOM from 'react-dom';
import UnorderedList from './Unordered_list_00';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnorderedList />, div);
});
