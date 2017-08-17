import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Flexbox from 'flexbox-react';

import TextChunker from './TextChunker.jsx';
import EditorWindow from './EditorWindow.jsx';
import PresetBar from './PresetBar.jsx';
import MediaLibrary from './MediaLibrary.jsx';

class VirtualConfigRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoObjects: [],
      globalPresets: []
    }
    this.createVideoObjects = this.createVideoObjects.bind(this);
    this.updateVideoObjects = this.updateVideoObjects.bind(this);
    this.makeVideo = this.makeVideo.bind(this);
  }

  createVideoObjects(newVideoObjects) {
    this.setState({ videoObjects: newVideoObjects });
  }

  updateVideoObjects(updatedVideoObjects) {
    this.setState({ videoObjects: updatedVideoObjects });
  }

  makeVideo() {
    makeVideo(this.state.videoObjects);
  }

  render() {
    return (
      <div>
      <PresetBar />
      <TextChunker createVideoObjects={this.createVideoObjects} />
      <MediaLibrary />
      <EditorWindow
          videoObjects={this.state.videoObjects}
          updateVideoObjects={this.updateVideoObjects} />
        <button onClick={this.makeVideo}> Make Video! </button>
      </div>
    );
  }
}

export default VirtualConfigRenderer;




/*
        <Grid fluid>
          <Row>
            <Col xs={3}>
              <MediaLibrary />
            </Col>
            <Col xs={9}>
              <TextChunker createVideoObjects={this.createVideoObjects} />
            </Col>
          </Row>
        </Grid>
*/