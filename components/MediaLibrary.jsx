var React = require('react');
import '../www/index.css';
import Dropzone from 'react-dropzone';

class MediaLibrary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mediaCount: 0,
			videoPaths: []
		}
		this.onDrop = this.onDrop.bind(this);
	}

	onDrop(files) {
		this.setState({ mediaCount: (files.length + this.state.mediaCount) });
		for (var i = 0; i < files.length; ++i) {
			this.state.videoPaths.push({ id: (this.state.mediaCount + i), media_path: files[i].path });
		}
		console.log(this.state.videoPaths)
    	this.props.trackMediaFiles(this.state.videoPaths);
	}

	drag(e) {
		e.dataTransfer.setData('text', e.target.src)
	}

	render() {
		return (
			<div>
				<div className="media-library" id="media-library">
					<Dropzone className="media-lib-drop" onDrop={this.onDrop.bind(this)}>
						Click or drag and drop here to add media
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