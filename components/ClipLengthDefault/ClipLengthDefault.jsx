import React from 'react';
import '../../www/styles.css';
import './ClipLengthDefault.css';

class ClipLengthDefault extends React.Component {
	constructor(props) {
		super(props);
		this.setTextTiming = this.setTextTiming.bind(this);
	}

 	setTextTiming() {
 		var videoObjects = this.props.videoObjects;
		var timing = this.props.timing;
		var position = this.props.position;
		var id = String(position) + "text-input";
		videoObjects[position].text_timing = document.getElementById(id).value;
		this.props.updateVideoObjects(videoObjects);
 	}

	render() {
		return (
			<div className="Chunk-video-start">
				<p className="Chunk-video-start-seconds"> Length: </p>
				<textarea 
					className="Chunk-video-start-input"
					id={String(this.props.position) + "text-input"} 
					defaultValue={this.props.timing}
					onChange={this.setTextTiming}>
				</textarea>
				<p className="Chunk-video-start-seconds"> seconds </p>
			</div>
		)
	}
}

export default ClipLengthDefault;