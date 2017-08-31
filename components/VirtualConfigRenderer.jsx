import React from 'react';

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
      globalPresets: {
        color: '#ffffff',
        font: 'Verdana.ttf',
        defaultAlign: 'middle-center-align',
        xPos: '(main_w/2-text_w/2)',
        yPos: '(main_h/2-text_h/2)',
      },
      presetOptions: {logo: '', music: '', aspect: '16:9'},
      mediaFiles: [],
      fileName: 'video.mov'

    }
    this.createVideoObjects = this.createVideoObjects.bind(this);
    this.updateGlobalPresets = this.updateGlobalPresets.bind(this);
    this.updateVideoObjects = this.updateVideoObjects.bind(this);
    this.updatePresetOptions = this.updatePresetOptions.bind(this);
    this.trackMediaFiles = this.trackMediaFiles.bind(this);
    this.updateGlobal = this.updateGlobal.bind(this);
    this.updatePresetOptions = this.updatePresetOptions.bind(this);
    this.nameFile = this.nameFile.bind(this);
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
    this.setState({ globalPresets: updatedGlobals });
  }

  updatePresetOptions(updatedPresetOptions) {
    console.log(updatedPresetOptions.logo);
    this.setState({ presetOptions: updatedPresetOptions });
  }

  updatePresetOptions(updatedPresetOptions) {
    //console.log(updatedPresetOptions.logo);
    this.setState({ presetOptions: updatedPresetOptions });
  }

  nameFile(inputtedName) {
    this.setState({ fileName: inputtedName });
  }

  makeVideo() {
    makeVideo(this.state.videoObjects, this.state.globalPresets, this.state.fileName, this.state.presetOptions);
  }

  render() {
    return (
      <div>
          <div className="init-menu-container">
          <InitMenu
            fileName={this.state.fileName}
            nameFile={this.nameFile}
            videoObjects={this.state.videoObjects} />
          </div>
          <div className="media-lib-container">
            <MediaLibrary
              trackMediaFiles={this.trackMediaFiles}
              mediaFiles={this.state.mediaFiles}
            />
          </div>
          <div className="editor-container">
            <GlobalPresetBar
              videoObjects={this.state.videoObjects}
              updateVideoObjects={this.updateVideoObjects}
              globalPresets={this.state.globalPresets}
              updateGlobal={this.updateGlobal}
              updateGlobalPresets={this.updateGlobalPresets}
              presetOptions={this.state.presetOptions}
              updatePresetOptions={this.updatePresetOptions}
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
      </div>
    );
  }
}

export default VirtualConfigRenderer;
