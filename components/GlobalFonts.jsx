import React from 'react';
import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import '../www/index.css';

const fonts = ['Times New Roman', 'Avenir', 'Comic Sans'];

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

export default FontPreset;