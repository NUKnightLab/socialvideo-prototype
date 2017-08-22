import React from 'react';
import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import '../www/index.css';

const colors = ['orange', 'red', 'blue', 'purple'];

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

export default ColorPreset