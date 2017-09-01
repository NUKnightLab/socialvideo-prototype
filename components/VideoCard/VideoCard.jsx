var React = require('react');
import '../../www/styles.css';
import './VideoCard.css';
import TextAlignSquare from '../TextAlignSquare/TextAlignSquare.jsx';
import ClipLengthDefault from '../ClipLengthDefault/ClipLengthDefault.jsx';
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

		this.updateCard = this.updateCard.bind(this);
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

	updateCard() {
		var videoObjects = this.props.videoObjects;
		var position = this.props.position;
		var id = String(position) + "text-input";
		videoObjects[position].text =  this.refs.videoCard.value;
		var cardTiming = setTiming(this.refs.videoCard.value);
		videoObjects[position].text_timing = cardTiming;
		document.getElementById(id).value = cardTiming;
		this.props.updateVideoObjects(videoObjects);
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
						defaultValue={this.props.text}
						ref="videoCard"
						>
					</textarea>

					<button onClick={this.updateCard}> Update Text! </button>

					<ClipLengthDefault
 						timing={this.props.timing}
 						videoObjects={this.props.videoObjects}
 						updateVideoObjects={this.props.updateVideoObjects}
 						position={this.props.position}
 					/>
					<button onClick={this.updateText}> Update Text! </button>
					<TextAlignSquare
						idPos={this.props.position}
						textAlign={this.setTextAlign}
						globalPresets={this.props.globalPresets}
						updateGlobal={this.props.updateGlobal}
						updateGlobalPresets={this.props.updateGlobalPresets}
					/>
				</div>
			</div>
		)
	}
}

export default VideoCard;