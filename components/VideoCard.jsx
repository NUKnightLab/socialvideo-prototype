var React = require('react');
import '../www/index.css';
import Flexbox from 'flexbox-react';
import TextAlignSquare from './TextAlignSquare.jsx';
import ClipLengthDefault from './ClipLengthDefault.jsx';
import Dropzone from 'react-dropzone';

class VideoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoPath: '',
			//dropped: false,
		};
		this.dragDrop = this.dragDrop.bind(this);
		this.setTextAlign = this.setTextAlign.bind(this);
	}

	dragDrop(e) {
		e.preventDefault();
		var data = e.dataTransfer.getData('text');
		console.log('dragdrop',data);
		this.setState({ videoPath: e.dataTransfer.getData('text') });
		var videoObjects = this.props.videoObjects;
		var position = this.props.position;
		videoObjects[position].video_path = data;
		this.props.updateVideoObjects[videoObjects];
	}

	setTextAlign(xPos, yPos) {
		var videoObjects = this.props.videoObjects;
		var position = this.props.position;
		videoObjects[position].xPos = xPos;
		videoObjects[position].yPos = yPos;
		this.props.updateVideoObjects[videoObjects];
	}

	render() {
		return (
			<div className="videocard" id={this.props.position + "card"}>
				<div
					className='dropzone'
					onDrop={this.dragDrop}>
        				<video
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
					
					<ClipLengthDefault
 						timing={this.props.timing}
 					/>
 					<textarea
					 	className="text"
					 	defaultValue={this.props.timing}>
					 </textarea>


					<TextAlignSquare
						idPos={this.props.position}
						textAlign={this.setTextAlign}
						globalPresets={this.props.globalPresets}
					/>
				</div>
			</div>
		)
	}
}

export default VideoCard;

//<div className="Chunk-text-timing"></div>
/*
<ClipLengthDefault
 	videoObjects={this.props.videoObjects}
 />



 <textarea
 	className="text"
 	defaultValue={this.props.timing}>
 </textarea>
 */
