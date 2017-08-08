var React = require('react');
import '../www/index.css';
import Flexbox from 'flexbox-react';

class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			numChildren: 0
    	};
  	}

  	render() {
    	return (
      		<button
        		onClick={() => {
          		this.setState({ count: this.state.count + 1 });
          		}}>
      			Count: {this.state.count}
     		</button>
    	);
  	}
}


class ChunKeeper extends React.Component {
	render() {
		return (
			<div className="ChunkPane">
				<Chunk />
			</div>
		)
	}
}

class Chunk extends React.Component {
	render() {
		return (
			<div className="Chunk">
				<Flexbox flexDirection="row">
					<img className="Chunk-thumbnail" src={'http://placehold.it/200x200'}/>

					<Flexbox flexDirection="column">
						<textarea className="Chunk-text-chunk" rows="4" cols="100">
							At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
						</textarea>
						<div className="Chunk-text-timing"></div>
						<div className="Chunk-video-start">
							<textarea className="Chunk-video-start-input"></textarea>
							<p className="Chunk-video-start-seconds"> seconds </p>
						</div>
						<div className="Chunk-text-align">
							<div className="Chunk-text-align-options"></div>
							<div className="Chunk-text-align-options"></div>
							<div className="Chunk-text-align-options"></div>
							<div className="Chunk-text-align-options"></div>
							<div className="Chunk-text-align-options"></div>
							<div className="Chunk-text-align-options"></div>
							<div className="Chunk-text-align-options"></div>
							<div className="Chunk-text-align-options"></div>
							<div className="Chunk-text-align-options"></div>
						</div>
					</Flexbox>

				</Flexbox>
			</div>
		)
	}
}

export default Chunk;