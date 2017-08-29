import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Flexbox from 'flexbox-react';

import TextChunker from './TextChunker.jsx';
import EditorWindow from './EditorWindow.jsx';
import GlobalPresetBar from './GlobalPresetBar.jsx';
import MediaLibrary from './MediaLibrary.jsx';

class VirtualConfigRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoObjects: [],
      globalPresets: {color: '#ffffff', font: 'Verdana.ttf', defaultAlign: 'middle-center-align', xPos: '(main_w/2-text_w/2)', yPos: '(main_h/2-text_h/2)'},
      mediaFiles: []
    }
    this.createVideoObjects = this.createVideoObjects.bind(this);
    this.updateGlobalPresets = this.updateGlobalPresets.bind(this);
    this.updateVideoObjects = this.updateVideoObjects.bind(this);
    this.trackMediaFiles = this.trackMediaFiles.bind(this);
    this.updateGlobal = this.updateGlobal.bind(this);
    this.makeVideo = this.makeVideo.bind(this);
  }

  createVideoObjects(newVideoObjects) {
    this.setState({ videoObjects: newVideoObjects });
  }

  updateGlobalPresets(updatedGlobalPresets) {
    this.setState({ globalPresets: updatedGlobalPresets });
  }

  updateVideoObjects(updatedVideoObjects) {
    this.setState({ videoObjects: updatedVideoObjects });
  }

  trackMediaFiles(uploadedFiles) {
    this.setState({ mediaFiles: uploadedFiles })
  }

  updateGlobal(updatedGlobals) {
    this.setState({globalPresets: updatedGlobals});
  }

  makeVideo() {
    makeVideo(this.state.videoObjects, this.state.globalPresets);
  }

  render() {
    return (
      <div>
        <Flexbox flexDirection="row">
          <div className="media-lib-container">
            <MediaLibrary
              trackMediaFiles={this.trackMediaFiles}
              mediaFiles={this.state.mediaFiles} />
          </div>
          <div className="editor-container"
            <GlobalPresetBar 
              videoObjects={this.state.videoObjects}
              updateVideoObjects={this.updateVideoObjects}
              globalPresets={this.state.globalPresets}
              updateGlobal={this.updateGlobal} 
              updateGlobalPresets={this.updateGlobalPresets}
              />
            <TextChunker 
              createVideoObjects={this.createVideoObjects} 
              videoObjects={this.state.videoObjects}
              globalPresets={this.state.globalPresets}
             />
            <EditorWindow
                videoObjects={this.state.videoObjects}
                updateVideoObjects={this.updateVideoObjects}
                globalPresets={this.state.globalPresets}
              />
              <button onClick={this.makeVideo}> Make Video! </button>
            </div>
          </Flexbox>
      </div>
    );
  }
}

export default VirtualConfigRenderer;
