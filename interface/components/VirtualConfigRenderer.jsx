import React from 'react';
import ReactDOM from 'react-dom';

import TextChunker from './TextChunker.jsx';
import MyTitleType from './Title.jsx';
import SplashPage from './splash.jsx';
import MediaLib from './mediaLibTest.jsx';
import AppComponent from './Chunk.jsx';
import Chunk from './Chunk.jsx';
import Counter from './ChunkCounter.jsx';

class VirtualConfigRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoObjects: []
    }
    this.createVideoObjects = this.createVideoObjects.bind(this);
  }

  createVideoObjects(newVideoObjects) {
    this.setState({ videoObjects: newVideoObjects });
  }

  render() {
    return (
      <div>
        <TextChunker onChunkCreation={this.createVideoObjects} />
        <AppComponent videoObjects={this.state.videoObjects} />
      </div>
    );
  }
}

export default VirtualConfigRenderer;
