var React = require('react');

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
        console.log(textSegmentsArray[i]);
        textSegmentsArray.splice(i, 1);
      }
    }
    textSegmentsArray.forEach(function(segment, index) {
      videoObjects.push({
        id: numVideoObjects,
        text: segment,
        thumbnail: '',
        video_path: '',
        xPos: globalPresets.xPos,
        yPos: globalPresets.yPos,
      });
      numVideoObjects++;
    });
    this.props.createVideoObjects(videoObjects);
  }

  render() {
    return (
      <div>
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
