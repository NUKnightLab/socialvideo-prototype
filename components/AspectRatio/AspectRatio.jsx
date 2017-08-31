import React from 'react';
import './AspectRatio.css';

class AspectRatio extends React.Component {
	render() {
		return (
			<div>
				<select className="aspect-container">
					<option value="1:1"> 1x1 - Square </option>
					<option value="4:5"> 4x5 - Vertical </option>
					<option value="4:5"> 16x9 - Full Landscape </option>
					<option value="4:5"> 9x16 - Full Portrait </option>
					<option value="4:5"> 1x2 - Newsfeed wide </option>
					<option value="4:5"> 2x3 - Facebook vertical </option>
				</select>
			</div>
		)
	}
}

export default AspectRatio;