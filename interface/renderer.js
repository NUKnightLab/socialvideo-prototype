// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const React = require('react');
const ReactDOM = require('react-dom');

import App from './src/app';
import TextChunker from './src/TextChunker.jsx';
import MyTitleType from './src/Title.jsx';
import SplashPage from './src/splash.jsx';
import MediaLib from './src/mediaLibTest.jsx';
import AppComponent from './src/Chunk.jsx';
//import Chunk from './src/Chunk.jsx';
import Counter from './src/ChunkCounter.jsx';

var chunkLites = [
  {
    id: "1",
    text_chunk: "these are words we are using,",
    thumbnail: "./thumbnail1.png",
    video_path: "not for now"},
  {
    id: "2",
    text_chunk: "here is a second batch,",
    thumbnail: "./thumbnail2.png",
    video_path: "not for now"
  },
  {
    id: "3",
    text_chunk: "and here's a third.",
    thumbnail: "./thumbnail3.png",
    video_path: "not for now"
  },
  {
    id: "4",
    text_chunk: "Welcome to FlavorTown.",
    thumbnail: "./thumbnail4.png",
    video_path: "not for now"
  }
];


ReactDOM.render(
	React.createElement(App),
	document.getElementById('app'));

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
    <AppComponent chunks={chunkLites}/>,
    document.getElementById('ChunkTest')
  );
  ReactDOM.render(React.createElement(Counter),
  	document.getElementById('ChunkCounter')
  );