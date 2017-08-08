import React from 'react';
import ReactDOM from 'react-dom';

import TextChunker from './TextChunker.jsx';
import MyTitleType from './Title.jsx';
import SplashPage from './splash.jsx';
import MediaLib from './mediaLibTest.jsx';
import AppComponent from './Chunk.jsx';
import Chunk from './Chunk.jsx';
import Counter from './ChunkCounter.jsx';


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
  ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('ChunkTest')
  );
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('ChunkCounter')
  );
});

