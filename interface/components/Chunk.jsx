var React = require('react');
import '../www/index.css';
import Flexbox from 'flexbox-react';
import TextAlignSquare from './TextAlignSquare.jsx';



class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			numChildren: 0
    	};
  	}

  	render() {
  		const children = [];
			const numVideoObjects = this.props.videoObjects.length;
  		//for (var i = 0; i < this.state.numChildren; i += 1) {
  		//	children.push(<Chunk number={i} />);
  		//};
			if (numVideoObjects > 0) {
				this.props.videoObjects.forEach(function(videoObject) {
				children.push(<Chunk key={videoObject.id} text={videoObject.text}  />)
				});
			}


    	return (
     		<ChunKeeper addChild={this.onAddChild.bind(this)}>
     			{children}
     		</ChunKeeper>
    	);
  	}

  	onAddChild() {
  		this.setState({
  			numChildren: this.state.numChildren + 1
  		});
  	}
}


class ChunKeeper extends React.Component {
	render() {
		return (
			<div className="ChunkPane">
				<p><a href="#" onClick={this.props.addChild}>
					Add another child Component
				</a></p>
				<div id="children-pane">
					{this.props.children}
				</div>
			</div>
		);
	}
}

class Chunk extends React.Component {
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
					</Flexbox>

				</Flexbox>
			</div>
		)
	}
}

export default AppComponent;
