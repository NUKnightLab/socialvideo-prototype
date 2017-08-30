import React from 'react';
import '../www/index.css';

class ClipLengthDefault extends React.Component {
	constructor(props) {
		super(props);
		//this.setTextTiming = this.setTextTiming.bind(this);
	}

 	// setTextTiming(inputTime) {
 	// 	var videoObjects = this.props.videoObjects;
		// var timing = this.props.timing;
		// videoObjects.text_timing = inputTime;
		// this.props.updateVideoObjects[videoObjects];
 	// }

	render() {
		return (
			<div className="Chunk-video-start">
				<p className="Chunk-video-start-seconds"> Length: </p>
				<textarea 
					className="Chunk-video-start-input" 
					defaultValue={this.props.timing}
					onChange={this.setTextTiming}>
				</textarea>
				<p className="Chunk-video-start-seconds"> seconds </p>
			</div>
		)
	}
}

export default ClipLengthDefault;