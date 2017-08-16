var React = require('react');
import '../www/index.css';
import Flexbox from 'flexbox-react';
import TextAlignSquare from './TextAlignSquare.jsx';
import Dropzone from 'react-dropzone';

class VideoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoPath: 'Drag and drop or click to upload a media file'
		};

		this.addPath = this.addPath.bind(this);
	//	this.addDropText = this.addDropText.bind(this);
	}

	addPath(file) {
		var fileOne = file.item(0);
		console.log(fileOne.path, this.props.position);
		this.setState({ videoPath: fileOne.path });
	}
	onDrop(files) {
		var videoObjects = this.props.videoObjects;
		var position = this.props.position;
		videoObjects[position].video_path = files[0].path;
		this.props.updateVideoObjects[videoObjects];
		console.log(files[0].path);
		console.log(videoObjects);
		this.setState({ videoPath: files[0].path });
	}

	render() {
		return (
			<div className="Chunk">
				<Flexbox flexDirection="row">
					<img className="Chunk-thumbnail" src={'http://placehold.it/200x200'}/>

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
						<Dropzone onDrop={this.onDrop.bind(this)}>
            				<p>{this.state.videoPath}</p>
          				</Dropzone>
					</Flexbox>

				</Flexbox>
			</div>
		)
	}
}

export default VideoCard;
