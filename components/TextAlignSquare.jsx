var React = require('react');
import '../www/index.css';

class TextAlignSquare extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            clicked: 'middle-center-align0',
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
    }
    topLeft() {
      this.props.textAlign('(main_w/2.75-text_w/2)', '(main_h/3-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('top-left-align' + this.props.idPos)});
      document.getElementById(('top-left-align' + this.props.idPos)).style.backgroundColor = 'black';
    }

    topCenter() {
      this.props.textAlign('(main_w/2-text_w/2)', '(main_h/3-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('top-center-align' + this.props.idPos)});
      document.getElementById(('top-center-align' + this.props.idPos)).style.backgroundColor = 'black';
    }

    topRight() {
      this.props.textAlign('(main_w/1.25-text_w/2)', '(main_h/3-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('top-right-align' + this.props.idPos)});
      document.getElementById(('top-right-align' + this.props.idPos)).style.backgroundColor = 'black';
    }

    middleLeft() {
      this.props.textAlign('(main_w/2.75-text_w/2)', '(main_h/2-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('middle-left-align' + this.props.idPos)});
      document.getElementById(('middle-left-align' + this.props.idPos)).style.backgroundColor = 'black';
    }

    middleCenter() {
      this.props.textAlign('(main_w/2-text_w/2)', '(main_h/2-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('middle-center-align' + this.props.idPos)});
      document.getElementById(('middle-center-align' + this.props.idPos)).style.backgroundColor = 'black';
    }

    middleRight() {
      this.props.textAlign('(main_w/1.25-text_w/2)', '(main_h/2-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('middle-right-align' + this.props.idPos)});
      document.getElementById(('middle-right-align' + this.props.idPos)).style.backgroundColor = 'black';
    }

    bottomLeft() {
      this.props.textAlign('(main_w/2.75-text_w/2)', '(main_h/1.25-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('bottom-left-align' + this.props.idPos)});
      document.getElementById(('bottom-left-align' + this.props.idPos)).style.backgroundColor = 'black';
    }

    bottomCenter() {
      this.props.textAlign('(main_w/2-text_w/2)', '(main_h/1.25-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('bottom-center-align' + this.props.idPos)});
      document.getElementById(('bottom-center-align' + this.props.idPos)).style.backgroundColor = 'black';
    }

    bottomRight(e) {
      this.props.textAlign('(main_w/1.25-text_w/2)', '(main_h/1.25-text_h/2)');
      document.getElementById(this.state.clicked).style.backgroundColor = 'white';
      this.setState({clicked: ('bottom-right-align' + this.props.idPos)});
      document.getElementById(('bottom-right-align' + this.props.idPos)).style.backgroundColor = 'black';
      console.log(e.id);
    }

    render() {
        return (
            <div className="Chunk-text-align" id="Chunk-text-align-parent">
                <div className="Chunk-text-align-options" id={"top-left-align" + this.props.idPos} onClick={this.topLeft} ></div>
                <div className="Chunk-text-align-options" id={"top-center-align" + this.props.idPos} onClick={this.topCenter} ></div>
                <div className="Chunk-text-align-options" id={"top-right-align" + this.props.idPos} onClick={this.topRight} ></div>
                <div className="Chunk-text-align-options" id={"middle-left-align" + this.props.idPos} onClick={this.middleLeft} ></div>
                <div className="Chunk-text-align-options" id={"middle-center-align" + this.props.idPos} onClick={this.middleCenter} ></div>
                <div className="Chunk-text-align-options" id={"middle-right-align" + this.props.idPos} onClick={this.middleRight} ></div>
                <div className="Chunk-text-align-options" id={"bottom-left-align" + this.props.idPos} onClick={this.bottomLeft} ></div>
                <div className="Chunk-text-align-options" id={"bottom-center-align" + this.props.idPos} onClick={this.bottomCenter} ></div>
                <div className="Chunk-text-align-options" id={"bottom-right-align" + this.props.idPos} onClick={this.bottomRight} ></div>
            </div>
        )
    }
}

export default TextAlignSquare;
