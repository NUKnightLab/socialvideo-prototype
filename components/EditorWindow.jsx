var React = require('react');
import '../www/index.css';
import TextAlignSquare from './TextAlignSquare.jsx';
import VideoCard from './VideoCard.jsx';

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
        video_path: '',
				xPos: 50,
        yPos: 50,
			})
			this.props.updateVideoObjects(updatedVideoObjects);
		}

  	render() {
    	return (
				<div>
					<button onClick={this.addVideoCard}> Add a Video Card </button>
					{this.props.videoObjects.map(videoObject =>
						<VideoCard
							key={videoObject.id}
							text={videoObject.text}
						 	videoObjects={this.props.videoObjects}
							position={videoObject.id}
							updateVideoObjects={this.props.updateVideoObjects}/>
					)}
				</div>
    	);
  	}
}

export default EditorWindow;
