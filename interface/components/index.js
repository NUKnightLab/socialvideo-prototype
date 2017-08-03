import React from 'react';
import ReactDOM from 'react-dom';
//don't have css loader yet?

import GlobalPresets from './GlobalPresetsPage.jsx';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(GlobalPresets),
    document.getElementById('mount')
  );
});
