var React = require('react');
import '../www/index.css';
import Flexbox from 'flexbox-react';
import TextAlignSquare from './TextAlignSquare.jsx';
import VideoCard from './VideoCard.jsx';
import PresetBar from './PresetBar.jsx';

class EditorWindow extends React.Component {
	constructor() {
		super();
		this.addVideoCard = this.addVideoCard.bind(this);
  	}

		addVideoCard() {
			var updatedVideoObjects = this.props.videoObjects;
			const numVideoObjects = this.props.videoObjects.length;
			updatedVideoObjects.push({
				id: (numVideoObjects),
				text: '',
				thumbnail: '',
        video_path: '',
			})
			this.props.updateVideoObjects(updatedVideoObjects);
		}

  	render() {

    	return (
				<div>
					<PresetBar />
					<button onClick={this.addVideoCard}> Add a Video Card </button>
					{this.props.videoObjects.map(videoObject =>
						<VideoCard key={videoObject.id} text={videoObject.text}  />
					)}
				</div>
    	);
  	}
}

export default EditorWindow;
