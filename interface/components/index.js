/* 
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
*/

//example component for testing purposes
import React from 'react';
import ReactDOM from 'react-dom';
require('../www/index.css');
//don't have css loader yet?

import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
