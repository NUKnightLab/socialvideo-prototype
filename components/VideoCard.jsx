var React = require('react');
import '../www/index.css';
import Flexbox from 'flexbox-react';
import TextAlignSquare from './TextAlignSquare.jsx';

class VideoCard extends React.Component {
	constructor(props) {
		super(props);
		this.addPath = this.addPath.bind(this);
	}
	addPath(file) {
		console.log(file.target.value, this.props.position);
	}

	render() {
		return (
			<div className="Chunk">
				<Flexbox flexDirection="row">
					<img className="Chunk-thumbnail" src={'http://placehold.it/200x200'}/>

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
						<input type="file" onChange={this.addPath}></input>
					</Flexbox>

				</Flexbox>
			</div>
		)
	}
}

export default VideoCard;
