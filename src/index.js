import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './static_pages/welcome/Welcome'
import UnorderedList from './static_pages/challenges/00_unordered_list/Unordered_list_00';
import NavBar from './static_pages/challenges/01_navigation_bar/Navigation_bar_01';
import './index.css';

ReactDOM.render(
  <div>
      <NavBar />
      <Welcome />
      <UnorderedList />
  </div>,
  document.getElementById('root')
);

