var React = require('react');
import '../www/index.css';
import Dropzone from 'react-dropzone';
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class MediaLibrary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mediaCount: 0
		}
		this.onDrop = this.onDrop.bind(this);
	}

	onDrop(files) {
		this.setState({ mediaCount: this.state.mediaCount + files.length-1 });
		var videoPaths = [];
		for (var i = 0; i < files.length; ++i) {
			videoPaths.push({ id: (this.state.mediaCount + i), media_path: files[i].path });
		}
    	this.props.trackMediaFiles(videoPaths);
	}

	drag(e) {
		e.dataTransfer.setData('text', e.target.src)
	}

	render() {
		return (
			<div>
				<div className="media-library" id="media-library">
					<Dropzone className="media-lib-drop" onDrop={this.onDrop.bind(this)}>
						<div id="add-media-square">Add media</div>
					</Dropzone>
					{this.props.mediaFiles.map(mediaFile =>
						<video 
							key={mediaFile.id}
							className='vidNode' 
							draggable='true'
							onDragStart={this.drag}
							src={mediaFile.media_path}>
						</video>
					)}
				</div>

			</div>
		)
	}
}

export default MediaLibrary;