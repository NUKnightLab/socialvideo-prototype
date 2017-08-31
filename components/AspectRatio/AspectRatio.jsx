import React from 'react';
import './AspectRatio.css';

class AspectRatio extends React.Component {
	recordSelectedAspect() {
        var presetOptions = this.props.presetOptions;
        var ar = document.getElementById('aspect-dropdown-menu');
        var arselection = ar.options[ar.selectedIndex].value;
        presetOptions.aspect = arselection;
        this.props.updatePresetOptions(presetOptions);
        console.log(arselection);
    }


	render() {
		return (
			<div>
				<select 
					className="aspect-container" 
					id="aspect-dropdown-menu" 
					onChange={this.recordSelectedAspect.bind(this)}>
						<option value="16:9"> 16x9 - Full Landscape </option>
						<option value="1:1"> 1x1 - Square </option>
						<option value="4:5"> 4x5 - Vertical </option>
						<option value="9:16"> 9x16 - Full Portrait </option>
						<option value="1:2"> 1x2 - Newsfeed wide </option>
						<option value="2:3"> 2x3 - Facebook vertical </option>
				</select>
			</div>
		)
	}
}

export default AspectRatio;