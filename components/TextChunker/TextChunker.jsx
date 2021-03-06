var React = require('react');
import './TextChunker.css';


// function setTiming(seg) {
//   var wpm = 180;
//   var delay = 1500;
//   var bonus = 1000;

//   var words = seg.split(' ').length;
//   var words_time = ((words/wpm) * 60) * 1000;
//   var total_time = Math.round(((delay + words_time + bonus)/1000)*100)/100;
//     console.log('seg: ', seg);
//     console.log('total_time: ', total_time);
//   return total_time;
// }


class TextChunker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    splitSentences();
    var videoObjects = this.props.videoObjects;
    var globalPresets = this.props.globalPresets;
    var textSegmentsArray = [];
    var textSegments = this.refs.textArea.value;
    var numVideoObjects = this.props.videoObjects.length;
    textSegmentsArray = textSegments.split('\n \n');
    for (var i = (textSegmentsArray.length - 1); i >= 0; i--) {
      if (textSegmentsArray[i] === "") {
        textSegmentsArray.splice(i, 1);
      }
    }
    textSegmentsArray.forEach(function(segment, index) {
      videoObjects.push({
        id: numVideoObjects,
        text: segment,
        text_timing: setTiming(segment),
        thumbnail: '',
        video_path: '',
        xPos: globalPresets.xPos,
        yPos: globalPresets.yPos,
      });
      numVideoObjects++;
    });
    this.props.createVideoObjects(videoObjects);
    document.getElementById('textChunkerArea').style.display = 'none';
  }

  render() {
    return (
      <div id="textChunkerArea">
        <div className="input-text-area">
            <textarea
              id="textField"
              rows="20"
              cols="50"
              ref="textArea"
            >
            </textarea>
            <br/>
            <button onClick={this.handleChange}>Chunk Me</button>
        </div>
      </div>
    );
  }
}
export default TextChunker;
