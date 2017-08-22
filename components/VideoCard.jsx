var React = require('react');
import '../www/index.css';
import Flexbox from 'flexbox-react';
import TextAlignSquare from './TextAlignSquare.jsx';
import Dropzone from 'react-dropzone';

class VideoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoPath: '', 
			//dropped: false,
		};
		this.dragDrop = this.dragDrop.bind(this);
	}

	dragDrop(e) {
		e.preventDefault();
		var data = e.dataTransfer.getData('text');
		console.log(data);
		this.setState({ videoPath: e.dataTransfer.getData('text') });
		var videoObjects = this.props.videoObjects;
		var position = this.props.position;
		videoObjects[position].video_path = data;
		this.props.updateVideoObjects[videoObjects];
	}

	render() {
		return (
			<div className="videocard">
				<div 
					className='dropzone' 
					//onDrop={this.onDrop.bind(this)}
					//style={dropzoneStyle}
					onDrop={this.dragDrop}>
        				<video 
        					//style={showVideo}
        					className='video-clip'
        					controls='true'
        					src={ this.state.videoPath }>
        				</video>
					</div>
				<div className="videocard-text-info">
					<textarea
						className="Chunk-text-chunk"
						defaultValue={this.props.text}>
					</textarea>
					<div className="Chunk-text-timing"></div>
					<div className="Chunk-video-start">
						<textarea className="Chunk-video-start-input"></textarea>
						<p className="Chunk-video-start-seconds"> seconds </p>
					</div>
					<TextAlignSquare />
				</div>
			</div>
		)
	}
}

export default VideoCard;
