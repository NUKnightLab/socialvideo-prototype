import React from 'react';
import ReactDOM from 'react-dom';

import TextChunker from './TextChunker.jsx';
import EditorWindow from './EditorWindow.jsx';

class VirtualConfigRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoObjects: [],
      globalPresets: []
    }
    this.createVideoObjects = this.createVideoObjects.bind(this);
    this.updateVideoObjects = this.updateVideoObjects.bind(this);
  }

  createVideoObjects(newVideoObjects) {
    this.setState({ videoObjects: newVideoObjects });
  }

  updateVideoObjects(updatedVideoObjects) {
    this.setState({ videoObjects: updatedVideoObjects });
  }

  render() {
    return (
      <div>
        <TextChunker createVideoObjects={this.createVideoObjects} />
        <EditorWindow
          videoObjects={this.state.videoObjects}
          updateVideoObjects={this.updateVideoObjects} />
      </div>
    );
  }
}

export default VirtualConfigRenderer;
