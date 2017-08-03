var React = require('react');

class TextChunker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

  }

  handleClick() {
    splitSentences();
  }


  render() {
    return (
      <div>
        <div className="input-text-area">
            <textarea id="textField" rows="20" cols="50"></textarea>
            <br/>
            <button onClick={splitSentences}>Chunk Me</button>
        </div>
      </div>
    );
  }
}
export default TextChunker;
