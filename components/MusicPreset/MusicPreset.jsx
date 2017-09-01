import React from 'react';
import Dropzone from 'react-dropzone';
import '../../www/styles.css';
import './MusicPreset.css';

class MusicPreset extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	song_path: ''
	    }
      this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
      this.setState({song_path: files[0].name});
      var presetOptions = this.props.presetOptions;
      presetOptions.music = files[0].path;
      this.props.updatePresetOptions(presetOptions);
  	}

    render() {
        return (
        	<div className="global-music-presets">
            <Dropzone className="music-drop" onDrop={this.onDrop}>
  						Add Music
  					</Dropzone>
            <p>{this.state.song_path}</p>
        	</div>
        )
    }
}

export default MusicPreset;
