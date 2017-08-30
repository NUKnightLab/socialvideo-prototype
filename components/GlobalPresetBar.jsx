import React from 'react';
import ReactDOM from 'react-dom';
import GlobalAlignSquare from './GlobalAlignSquare.jsx';
import TextColorPreset from './TextColorPreset.jsx';
import FontPreset from './FontPreset.jsx';
import LogoPreset from './LogoPreset.jsx';
//import Flexbox from 'flexbox-react';
import '../www/index.css';

class GlobalPresetBar extends React.Component {
	render() {
		return (
			<div className="global-presets-bar">
                <TextColorPreset 
                    globalPresets={this.props.globalPresets}
                    updateGlobal={this.props.updateGlobal}
                />
				<FontPreset
                    globalPresets={this.props.globalPresets}
                    updateGlobal={this.props.updateGlobal}
                />
        		<GlobalAlignSquare
					videoObjects={this.props.videoObjects}
					updateVideoObjects={this.props.updateVideoObjects}
					globalPresets={this.props.globalPresets}
					updateGlobalPresets={this.props.updateGlobalPresets}
				/>
        		<LogoPreset />
			</div>
		);
	}
}


export default GlobalPresetBar;