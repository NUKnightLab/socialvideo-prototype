var React = require('react');

class TextChunker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    splitSentences();
    var videoObjects = [];
    var textSegmentsArray = [];
    var textSegments = e.target.value;
    textSegmentsArray = textSegments.split('\n \n');
    for (var i = (textSegmentsArray.length - 1); i >= 0; i--) {
      if (textSegmentsArray[i] === "") {
        console.log(textSegmentsArray[i]);
        textSegmentsArray.splice(i, 1);
      }
    }
    textSegmentsArray.forEach(function(segment, index) {
      videoObjects.push({
        id: index,
        text: segment,
        thumbnail: '',
        video_path: '',
      });
    });
    this.props.onChunkCreation(videoObjects);
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
              onChange={this.handleChange}
            >
            </textarea>
            <br/>
            <button onClick={splitSentences}>Chunk Me</button>
        </div>
      </div>
    );
  }
}
export default TextChunker;
