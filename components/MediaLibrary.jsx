var React = require('react');
import '../www/index.css';
import Dropzone from 'react-dropzone';
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class MediaLibrary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoPaths: []
		}
		this.onDrop = this.onDrop.bind(this);
	}

	onDrop(files) {
		for (var i = 0; i < files.length; ++i) {
			var vidNode = document.createElement('video');
			vidNode.setAttribute("class", "vidNode");
			vidNode.setAttribute("src", files[i].path);
			var container = document.createElement('div');
			container.appendChild(vidNode);
			var mediaLib = document.getElementById('media-library');
			mediaLib.appendChild(container);
		}
	}

	render() {
		return (
			<div>
				<Dropzone className="media-library" id="media-library" onDrop={this.onDrop.bind(this)}>
					<div id="add-media-square">Add media</div>
				</Dropzone>

			</div>
		)
	}
}

export default MediaLibrary;