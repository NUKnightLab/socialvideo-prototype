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
			dropped: false,
			draggedPath: ''
		};
		this.dragDrop = this.dragDrop.bind(this);
	}

	dragDrop(e) {
		e.preventDefault();
		var data = e.dataTransfer.getData('text');
		console.log(data);
		this.setState({ draggedPath: e.dataTransfer.getData('text') });
	}

	render() {
		return (
			<div className="Chunk">
				<Flexbox flexDirection="row">
					<div 
						className='dropzone' 
						//onDrop={this.onDrop.bind(this)}
						//style={dropzoneStyle}
						onDrop={this.dragDrop}>
            				<video 
            					//style={showVideo}
            					className='video-clip'
            					controls='true'
            					src={ this.state.draggedPath }>
            				</video>
  					</div>
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

/*
<Dropzone className="dropzone" onDrop={this.onDrop.bind(this)} style={dropzoneStyle}>
            				<p style={showInstructions}> Drag and drop assets from media library </p>
            				<video style={showVideo} className="video-clip" controls>
            					<source src={ this.state.videoPath } />
            				</video>
          			</Dropzone>


 <p style={showInstructions}> Drag and drop assets from media library </p>
*/
