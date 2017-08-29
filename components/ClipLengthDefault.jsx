import React from 'react';
import '../www/index.css';

class ClipLengthDefault extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text_timing: 0,
		}
	}

	setTiming() {
		var wpm = 180;
		var word_length = 5;
		var delay = 1500;
		var bonus = 1000;

		videoObjects.forEach(function(object) {
			var words = (countWords(object.text))/word_length;
			var words_time = ((words/wpm) * 60) * 1000;
			var total_time = (delay + words_time + bonus)/100;
			timingArray.push(total_time);
		})
	}

	countWords(sentence) {
		var sentenceWords = sentence.split(" ");
		return sentenceWords.length;
	}

	render() {
		return (
			<div className="Chunk-video-start">
				<textarea className="Chunk-video-start-input">{this.state.text_timing}</textarea>
				<p className="Chunk-video-start-seconds"> seconds </p>
			</div>
		)
	}
}

export default ClipLengthDefault;