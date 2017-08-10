import React from 'react';
import ReactDOM from 'react-dom';

import VirtualConfigRenderer from './VirtualConfigRenderer.jsx'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(VirtualConfigRenderer),
    document.getElementById('title')
  );
});
