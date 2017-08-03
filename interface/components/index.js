import React from 'react';
import ReactDOM from 'react-dom';
//don't have css loader yet?

import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
