import React from 'react';
import ReactDOM from 'react-dom';

import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';

const colors = ['orange', 'red', 'blue', 'purple'];

/*
class PresetBar extends React.Component {
	render() {
		return ( 
			<div> 
				<ColorPreset />
				//<HighlightPreset />
				//<FontPreset />
				//<Upload />
			</div> 
		);
	}
}
*/

class ColorPreset extends React.Component {
	constructor(props) {
  		super(props);
  		this.state = {
    		value: colors[0]
  		};
	}

	render() {
		return (
      		<DropdownList
        		data={colors}
        		value={this.state.value}
        		onChange={value => this.setState({ value })}/>
        )
  	}
}

export default ColorPreset;