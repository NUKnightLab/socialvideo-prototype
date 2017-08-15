
const React = require('react');
const ReactDOM = require('react-dom');

import VirtualConfigRenderer from './VirtualConfigRenderer.jsx';

  ReactDOM.render(React.createElement(VirtualConfigRenderer),
    document.getElementById('mount')
  );
