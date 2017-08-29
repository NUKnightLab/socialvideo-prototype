import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Flexbox from 'flexbox-react';

import TextChunker from './TextChunker.jsx';
import EditorWindow from './EditorWindow.jsx';
import GlobalPresetBar from './GlobalPresetBar.jsx';
import MediaLibrary from './MediaLibrary.jsx';
import InitMenu from './InitMenu.jsx';

class VirtualConfigRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoObjects: [],
      globalPresets: {color: '#ffffff', font: 'Verdana.ttf',},
      mediaFiles: [],
      fileName: 'video.mov'
    }
    this.createVideoObjects = this.createVideoObjects.bind(this);
    this.updateVideoObjects = this.updateVideoObjects.bind(this);
    this.trackMediaFiles = this.trackMediaFiles.bind(this);
    this.updateGlobal = this.updateGlobal.bind(this);
    this.nameFile = this.nameFile.bind(this);
    this.makeVideo = this.makeVideo.bind(this);
  }

  createVideoObjects(newVideoObjects) {
    this.setState({ videoObjects: newVideoObjects });
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

  nameFile(inputtedName) {
    this.setState({ fileName: inputtedName });
  }

  makeVideo() {
    makeVideo(this.state.videoObjects, this.state.globalPresets, this.state.fileName)
      //.then(addAudio(this.state.fileName), console.log('lol nope1'))
      //.then(addLogo(this.state.fileName), console.log('lol nope2'))
  }

  render() {
    return (
      <div>
        <div className="init-menu-container">
          <InitMenu 
            fileName={this.state.fileName}
            nameFile={this.nameFile} />
        </div>
        <div className="media-lib-container">
          <MediaLibrary 
            mediaFiles={this.state.mediaFiles}
            trackMediaFiles={this.trackMediaFiles} />
        </div>
        <div className="editor-container">
          <GlobalPresetBar 
            globalPresets={this.state.globalPresets}
            updateGlobal={this.updateGlobal} />
          <TextChunker 
            createVideoObjects={this.createVideoObjects} />
          <EditorWindow
            videoObjects={this.state.videoObjects}
            updateVideoObjects={this.updateVideoObjects} />
            <button onClick={this.makeVideo}> Make Video! </button>
          </div>
      </div>
    );
  }
}

export default VirtualConfigRenderer;