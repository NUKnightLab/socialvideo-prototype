import React from 'react';
import ReactDOM from 'react-dom';

import TextChunker from './TextChunker.jsx';
import MyTitleType from './Title.jsx';
import SplashPage from './splash.jsx';
import MediaLib from './mediaLibTest.jsx';
import AppComponent from './Chunk.jsx';
import Chunk from './Chunk.jsx';
import Counter from './ChunkCounter.jsx';
import VirtualConfigRenderer from './VirtualConfigRenderer.jsx'


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

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(VirtualConfigRenderer),
    document.getElementById('title')
  );
});
