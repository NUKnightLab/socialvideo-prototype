import React from 'react';
import ReactDOM from 'react-dom';
require('../www/index.css');
//don't have css loader yet?

import Counter from './Counter';
import App from './App';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
