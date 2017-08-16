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
			dropped: false
		}
	}

	onDrop(files) {
		var videoObjects = this.props.videoObjects;
		var position = this.props.position;
		videoObjects[position].video_path = files[0].path;
		this.props.updateVideoObjects[videoObjects];
		console.log(files[0].path);
		console.log(videoObjects);
		this.setState({ videoPath: files[0].path });
		this.setState({ dropped: true })

	}

	render() {
		const dropzoneStyle = {
			borderWidth: this.state.dropped ? '0px' : '2px',
		}

		const showVideo = {
			display: this.state.dropped ? 'inline' : 'none'
		}

		const showInstructions = {
			display: this.state.dropped ? 'none' : 'inline'
		}

		return (
			<div className="Chunk">
				<Flexbox flexDirection="row">
					<Dropzone className="dropzone" onDrop={this.onDrop.bind(this)} style={dropzoneStyle}>
            				<p style={showInstructions}> Drag and drop or click here to upload a media file </p>
            				<video style={showVideo} className="video-clip" controls>
            					<source src={ this.state.videoPath } />
            				</video>
          			</Dropzone>
					<Flexbox flexDirection="column">
						<textarea
							className="Chunk-text-chunk"
							defaultValue={this.props.text} rows="4" cols="100">
						</textarea>
						<div className="Chunk-text-timing"></div>
						<div className="Chunk-video-start">
							<textarea className="Chunk-video-start-input"></textarea>
							<p className="Chunk-video-start-seconds"> seconds </p>
						</div>
						<TextAlignSquare />
					</Flexbox>
				</Flexbox>
			</div>
		)
	}
}

export default VideoCard;
