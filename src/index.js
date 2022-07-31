import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './static_pages/welcome/Welcome'
import Unordered_list_00 from './static_pages/challenges/00_unordered_list/Unordered_list_00';
import './index.css';

ReactDOM.render(
  [<Welcome />, <Unordered_list_00 />],
  document.getElementById('root')
);

