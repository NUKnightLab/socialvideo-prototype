var React = require('react');
import '../www/index.css';
import TextAlignSquare from './TextAlignSquare.jsx';
import VideoCard from './VideoCard.jsx';

class EditorWindow extends React.Component {
	constructor() {
		super();
		this.state = {
			currentDrag: '',
			droppedPos: '',
		}
		this.acceptDrop = this.acceptDrop.bind(this);
		this.addVideoCard = this.addVideoCard.bind(this);
		this.allowDrop = this.allowDrop.bind(this);
		this.drag = this.drag.bind(this);
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

		acceptDrop(e) {
			console.log(e.target.id);
			var droppedPos = Number(e.target.id);
			var id = e.dataTransfer.getData("Text");
			var currentPos = Number(id);
			console.log(droppedPos, currentPos);
			var videoObjects = this.props.videoObjects;
			this.setState({droppedPos: droppedPos});
			if (currentPos > droppedPos) {
				videoObjects[currentPos].id = droppedPos;
				videoObjects.splice(droppedPos, 0, videoObjects.splice(currentPos, 1)[0]);
				console.log(videoObjects);
				for (var i = (droppedPos + 1); i <= currentPos; i++) {
					videoObjects[i].id = videoObjects[i].id + 1;
					console.log("hi");
				}
			}
			else if (currentPos < droppedPos) {
				videoObjects[currentPos].id = droppedPos;
				videoObjects.splice(droppedPos, 0, videoObjects.splice(currentPos, 1)[0]);
				for (var i = currentPos; i < droppedPos; i++) {
					videoObjects[i].id = videoObjects[i].id - 1;
				}
			}
			this.props.updateVideoObjects(videoObjects);
		}

		allowDrop(e) {

		}

		drag(e) {
			var currentCard = e.target.id;
			currentCard = currentCard.split("card");
			var currentDrag = Number(currentCard[1]);
			console.log(currentDrag);
			this.setState({currentDrag: currentDrag});
			e.dataTransfer.setData("Text", currentDrag);
		}

  	render() {
    	return (
				<div>
					<button onClick={this.addVideoCard}> Add a Video Card </button>
					{this.props.videoObjects.map(videoObject =>
						<div className="videoCardContainer" id={"card" + videoObject.id} draggable="true" onDragStart={this.drag} onDrop={this.acceptDrop}>
							<div
								className="card-drag"
								id={videoObject.id}
								key={"card" + videoObject.id}
								onDragOver={this.allowDrop}
							>
							</div>
							<VideoCard
								key={videoObject.id}
								text={videoObject.text}
							 	videoObjects={this.props.videoObjects}
								position={videoObject.id}
								updateVideoObjects={this.props.updateVideoObjects}/>
						</div>
					)}
				</div>
    	);
  	}
}

export default EditorWindow;
