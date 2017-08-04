import React from 'react';
import ReactDOM from 'react-dom';

import TextChunker from './TextChunker.jsx';
import MyTitleType from './Title.jsx';
import SplashPage from './splash.jsx';
import MediaLib from './mediaLibTest.jsx';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(SplashPage),
    document.getElementById('title')
  );
  ReactDOM.render(
    React.createElement(TextChunker),
    document.getElementById('app')
  );
  ReactDOM.render(
  	React.createElement(MediaLib),
  	document.getElementById('mount')
  );
});

