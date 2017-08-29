var React = require('react');
import '../www/index.css';

class GlobalAlignSquare extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            clicked: 'middle-center-align',
        }
        this.topLeft = this.topLeft.bind(this);
        this.topCenter = this.topCenter.bind(this);
        this.topRight = this.topRight.bind(this);
        this.middleLeft = this.middleLeft.bind(this);
        this.middleCenter = this.middleCenter.bind(this);
        this.middleRight = this.middleRight.bind(this);
        this.bottomLeft = this.bottomLeft.bind(this);
        this.bottomCenter = this.bottomCenter.bind(this);
        this.bottomRight = this.bottomRight.bind(this);
        this.setTextAlign = this.setTextAlign.bind(this);
    }
    topLeft() {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'top-left-align';
      this.setState({clicked: clicked});
      document.getElementById('top-left-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/2.75-text_w/2)', '(main_h/3-text_h/2)', clicked);
    }

    topCenter() {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'top-center-align';
      this.setState({clicked: clicked});
      document.getElementById('top-center-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/2-text_w/2)', '(main_h/3-text_h/2)', clicked);
    }

    topRight() {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'top-right-align';
      this.setState({clicked: clicked});
      document.getElementById('top-right-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/1.25-text_w/2)', '(main_h/3-text_h/2)', clicked);
    }

    middleLeft() {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'middle-left-align';
      this.setState({clicked: clicked});
      document.getElementById('middle-left-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/2.75-text_w/2)', '(main_h/2-text_h/2)', clicked);
    }

    middleCenter() {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'middle-center-align';
      this.setState({clicked: clicked});
      document.getElementById('middle-center-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/2-text_w/2)', '(main_h/2-text_h/2)', clicked);
    }

    middleRight() {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'middle-right-align';
      this.setState({clicked: clicked});
      document.getElementById('middle-right-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/1.25-text_w/2)', '(main_h/2-text_h/2)', clicked);
    }

    bottomLeft() {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'bottom-left-align';
      this.setState({clicked: clicked});
      document.getElementById('bottom-left-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/2.75-text_w/2)', '(main_h/1.25-text_h/2)', clicked);
    }

    bottomCenter() {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'bottom-center-align';
      this.setState({clicked: clicked});
      document.getElementById('bottom-center-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/2-text_w/2)', '(main_h/1.25-text_h/2)', clicked);
    }

    bottomRight(e) {
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      var clicked = 'bottom-right-align';
      this.setState({clicked: clicked});
      document.getElementById('bottom-right-align').style.backgroundColor = 'black';
      this.setTextAlign('(main_w/1.25-text_w/2)', '(main_h/1.25-text_h/2)', clicked);
    }

    setTextAlign(xPos, yPos, clicked) {
  		var videoObjects = this.props.videoObjects;
      var globalPresets = this.props.globalPresets;
  		videoObjects.forEach(function(videoObject){
        videoObject.xPos = xPos;
        videoObject.yPos = yPos;
      });
      globalPresets.defaultAlign = clicked;
      globalPresets.xPos = xPos;
      globalPresets.yPos = yPos;
      this.props.updateGlobalPresets(globalPresets);
  		this.props.updateVideoObjects(videoObjects);
  	}

    render() {
      const middleCenter = {
        backgroundColor: 'black',
      }
        return (
            <div className="Chunk-text-align" id="Chunk-text-align-parent">
                <div className="Chunk-text-align-options" id={"top-left-align"} onClick={this.topLeft} ></div>
                <div className="Chunk-text-align-options" id={"top-center-align"} onClick={this.topCenter} ></div>
                <div className="Chunk-text-align-options" id={"top-right-align"} onClick={this.topRight} ></div>
                <div className="Chunk-text-align-options" id={"middle-left-align"} onClick={this.middleLeft} ></div>
                <div className="Chunk-text-align-options" id={"middle-center-align"} onClick={this.middleCenter} style={middleCenter}></div>
                <div className="Chunk-text-align-options" id={"middle-right-align"} onClick={this.middleRight} ></div>
                <div className="Chunk-text-align-options" id={"bottom-left-align"} onClick={this.bottomLeft} ></div>
                <div className="Chunk-text-align-options" id={"bottom-center-align"} onClick={this.bottomCenter} ></div>
                <div className="Chunk-text-align-options" id={"bottom-right-align"} onClick={this.bottomRight} ></div>
            </div>
        )
    }
}

export default GlobalAlignSquare;
