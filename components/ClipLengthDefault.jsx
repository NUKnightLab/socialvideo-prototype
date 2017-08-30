import React from 'react';
import '../www/index.css';

class ClipLengthDefault extends React.Component {
	render() {
		return (
			<div className="Chunk-video-start">
				<p className="Chunk-video-start-seconds"> Recommended length: </p>
				<textarea 
					className="Chunk-video-start-input" 
					defaultValue={this.props.timing}>
				</textarea>
				<p className="Chunk-video-start-seconds"> seconds </p>
			</div>
		)
	}
}

export default ClipLengthDefault;