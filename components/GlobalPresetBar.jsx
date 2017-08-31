import React from 'react';
import ReactDOM from 'react-dom';
//import 'react-widgets/lib/less/react-widgets.less';
//import DropdownList from 'react-widgets/lib/DropdownList';
import GlobalAlignSquare from './GlobalAlignSquare.jsx';
import TextColorPreset from './TextColorPreset.jsx';
import FontPreset from './FontPreset.jsx';
import LogoPreset from './LogoPreset.jsx';
import MusicPreset from './MusicPreset.jsx';
import Flexbox from 'flexbox-react';
import '../www/index.css';

class GlobalPresetBar extends React.Component {
	render() {
		return (
			<div className="global_presets">
			<Flexbox flexDirection="row">
        <TextColorPreset
          globalPresets={this.props.globalPresets}
          updateGlobal={this.props.updateGlobal}
        />
				<FontPreset
	        globalPresets={this.props.globalPresets}
          updateGlobal={this.props.updateGlobal}
        />
				<div id="text-align">
	        <GlobalAlignSquare
						videoObjects={this.props.videoObjects}
						updateVideoObjects={this.props.updateVideoObjects}
						globalPresets={this.props.globalPresets}
						updateGlobalPresets={this.props.updateGlobalPresets}
					/>
				</div>
        <LogoPreset presetOptions={this.props.presetOptions} updatePresetOptions={this.props.updatePresetOptions}/>
				<MusicPreset presetOptions={this.props.presetOptions} updatePresetOptions={this.props.updatePresetOptions}/>
			</Flexbox>
			</div>
		);
	}
}


export default GlobalPresetBar;
