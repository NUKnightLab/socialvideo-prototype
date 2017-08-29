var React = require('react');
import '../www/index.css';
import TextAlignSquare from './TextAlignSquare.jsx';
import VideoCard from './VideoCard.jsx';

class EditorWindow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDrag: '',
			droppedPos: '',
			videoObjects: props.videoObjects,
		}
		this.acceptDrop = this.acceptDrop.bind(this);
		this.addVideoCard = this.addVideoCard.bind(this);
		this.drag = this.drag.bind(this);
  	}

		addVideoCard() {
			var updatedVideoObjects = this.props.videoObjects;
			const numVideoObjects = this.props.videoObjects.length;
			updatedVideoObjects.push({
				id: (numVideoObjects),
				text: '',
				text_timing: 0,
        video_path: '',
				xPos: 50,
        yPos: 50,
			})
			this.props.updateVideoObjects(updatedVideoObjects);
		}

		acceptDrop(e) {
			var currentCard = e.target.id;
			currentCard = currentCard.split("card");
			var droppedPos = Number(currentCard[0]);
			var id = e.dataTransfer.getData("Text");
			var currentPos = Number(id);
			console.log(droppedPos, currentPos);
			var videoObjects = this.state.videoObjects.slice(0);
			this.setState({droppedPos: droppedPos});
			if (currentPos > droppedPos) {
				videoObjects[currentPos].id = droppedPos;
				videoObjects.splice(droppedPos, 0, videoObjects.splice(currentPos, 1)[0]);
				console.log(videoObjects);
				for (var i = (droppedPos + 1); i <= currentPos; i++) {
					videoObjects[i].id = videoObjects[i].id + 1;
				}
			}
			else if (currentPos < droppedPos) {
				videoObjects[currentPos].id = droppedPos;
				videoObjects.splice(droppedPos, 0, videoObjects.splice(currentPos, 1)[0]);
				console.log(videoObjects);
				for (var i = currentPos; i < droppedPos; i++) {
					videoObjects[i].id = videoObjects[i].id - 1;
					videoObjects[i].text = videoObjects[i].text + ' ';
				}
			}
			this.setState({videoObjects: videoObjects});
			this.props.updateVideoObjects(videoObjects);
		}

		drag(e) {
			var currentCard = e.target.id;
			currentCard = currentCard.split("card");
			var currentDrag = Number(currentCard[1]);
			this.setState({currentDrag: currentDrag});
			e.dataTransfer.setData("Text", currentDrag);
		}

  	render() {
    	return (
				<div>
					<button onClick={this.addVideoCard}> Add a Video Card </button>
					{this.state.videoObjects.map(videoObject =>
						<div className="videoCardContainer" id={"card" + videoObject.id} key={"card" + videoObject.id + 50} draggable="true" onDragStart={this.drag} onDrop={this.acceptDrop}>
							<div
								className="card-drag"
								id={videoObject.id}
								key={"card" + videoObject.id}
							>
							</div>
							<VideoCard
								key={videoObject.id}
								text={videoObject.text}
							 	videoObjects={this.props.videoObjects}
								globalPresets={this.props.globalPresets}
								position={videoObject.id}
								updateVideoObjects={this.props.updateVideoObjects}/>
						</div>
					)}
				</div>
    	);
  	}
}

export default EditorWindow;
