var React = require('react');
import '../www/index.css';

class TextAlignSquare extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            clickLocation: ''
        }
    }

    locateText() {
    }

    render() {
        return (
            <div className="Chunk-text-align" id="Chunk-text-align-parent">
                <div className="Chunk-text-align-options" id="top-left-align"></div>
                <div className="Chunk-text-align-options" id="top-center-align"></div>
                <div className="Chunk-text-align-options" id="top-right-align"></div>
                <div className="Chunk-text-align-options" id="middle-left-align"></div>
                <div className="Chunk-text-align-options" id="middle-center-align"></div>
                <div className="Chunk-text-align-options" id="middle-right-align"></div>
                <div className="Chunk-text-align-options" id="bottom-left-align"></div>
                <div className="Chunk-text-align-options" id="bottom-center-align"></div>
                <div className="Chunk-text-align-options" id="bottom-right-align"></div>
            </div>
        )
    }
}

export default TextAlignSquare;
