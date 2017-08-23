import React from 'react';
import ReactDOM from 'react-dom';
//import 'react-widgets/lib/less/react-widgets.less';
//import DropdownList from 'react-widgets/lib/DropdownList';
import ColorPreset from './GlobalColors.jsx';
import FontPreset from './GlobalFonts.jsx';
import DefaultTextPosition from './GlobalPositioning.jsx';
import GlobalLogo from './GlobalLogo.jsx';
import Flexbox from 'flexbox-react';
import '../www/index.css';


const colors = ['orange', 'red', 'blue', 'purple'];
const fonts = ['Times New Roman', 'Avenir', 'Comic Sans'];

class PresetBar extends React.Component {
	render() {
		return ( 
			<div className="global_presets">
			<Flexbox flexDirection="row">
				<ColorPreset globalPresets={this.props.globalPresets} updateGlobal={this.props.updateGlobal} />
				<FontPreset />
        <DefaultTextPosition />
        <GlobalLogo />
			</Flexbox>
			</div>
		);
	}
}

export default PresetBar;


/*
class ColorPreset extends React.Component {
	constructor(props) {
  		super(props);
  		this.state = {
    		value: colors[0]
  		};
	}

	render() {
		return (
			<div className="preset">
		    <p>Text Color</p>
      	<DropdownList
        	data= {colors}
        	value={this.state.value}
        	onChange={value => this.setState({ value })}/>
      </div>
    )
  }
}

class HighlightPreset extends React.Component {
	constructor(props) {
  		super(props);
  		this.state = {
    		value: colors[0]
  		};
	}

	render() {
		return (
			<div className="preset">
			<p>Highlight Color</p>
      		<DropdownList
        		data= {colors}
        		value={this.state.value}
        		onChange={value => this.setState({ value })}/>
        	</div>
        )
  	}
}


class FontPreset extends React.Component {
	constructor(props) {
  		super(props);
  		this.state = {
    		value: fonts[0]
  		};
	}

	render() {
		return (
			<div className="preset">
			<p>Font</p>
      		<DropdownList
        		data= {fonts}
        		value={this.state.value}
        		onChange={value => this.setState({ value })}/>
        	</div>
        )
  	}
}
*/