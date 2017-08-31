import React from 'react';
import GlobalAlignSquare from './GlobalAlignSquare.jsx';
import Dropzone from 'react-dropzone';
import '../www/index.css';

class LogoPreset extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	logo_path: ''
	    }
      this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
      this.setState({logo_path: files[0].path});
      var presetOptions = this.props.presetOptions;
      presetOptions.logo = files[0].path;
      this.props.updatePresetOptions(presetOptions);
  	}

    render() {
        return (
        	<div className="global-logo-presets">
            <Dropzone className="logo-drop" onDrop={this.onDrop}>
  						Add Logo
  					</Dropzone>
            <img src={this.state.logo_path} id="logo" />
        	</div>
        )
    }
}

export default LogoPreset;
