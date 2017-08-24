import React from 'react';
import ReactDOM from 'react-dom';
//import 'react-widgets/lib/less/react-widgets.less';
//import DropdownList from 'react-widgets/lib/DropdownList';
import TextColorPreset from './TextColorPreset.jsx';
import FontPreset from './FontPreset.jsx';
import PositioningPreset from './PositioningPreset.jsx';
import LogoPreset from './LogoPreset.jsx';
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
        <PositioningPreset />
        <LogoPreset />
			</Flexbox>
			</div>
		);
	}
}

export default GlobalPresetBar;