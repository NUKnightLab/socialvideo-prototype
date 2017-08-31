import React from 'react';
import ReactDOM from 'react-dom';
import GlobalAlignSquare from './GlobalAlignSquare.jsx';
import TextColorPreset from './TextColorPreset.jsx';
import FontPreset from './FontPreset.jsx';
import LogoPreset from './LogoPreset.jsx';
import MusicPreset from './MusicPreset.jsx';
import AspectRatio from './AspectRatio/AspectRatio.jsx';
//import Flexbox from 'flexbox-react';
import '../www/index.css';

class GlobalPresetBar extends React.Component {
	render() {
		return (
			<div className="global-presets-bar">
				<div className="global-presets-name-container">
					<div className="global-preset-label"> Text Color </div>
	                <TextColorPreset 
	                    globalPresets={this.props.globalPresets}
	                    updateGlobal={this.props.updateGlobal}
	                />
	            </div>
	            <div className="global-presets-name-container">
					<div className="global-preset-label"> Font </div>
					<FontPreset
	                    globalPresets={this.props.globalPresets}
	                    updateGlobal={this.props.updateGlobal}
	                />
	            </div>
	            <div className="global-presets-name-container">
					<div className="global-preset-label"> Aspect Ratio </div>
                	<AspectRatio 
                		presetOptions={this.props.presetOptions}
                		updatePresetOptions={this.props.updatePresetOptions}
                	/>
               	</div>
               	<div className="global-presets-name-container">
					<div className="global-preset-label"> Align Text </div>
	        		<GlobalAlignSquare
						videoObjects={this.props.videoObjects}
						updateVideoObjects={this.props.updateVideoObjects}
						globalPresets={this.props.globalPresets}
						updateGlobalPresets={this.props.updateGlobalPresets}
					/>
				<div className="global-presets-name-container">
					<div className="global-preset-label"> Upload Logo </div>
        			<LogoPreset presetOptions={this.props.presetOptions} updatePresetOptions={this.props.updatePresetOptions}/>
				      <MusicPreset presetOptions={this.props.presetOptions} updatePresetOptions={this.props.updatePresetOptions}/>
        		</div>
			</div>
      </div>
		);
	}
}


export default GlobalPresetBar;
