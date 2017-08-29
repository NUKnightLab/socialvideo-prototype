var React = require('react');
import '../www/index.css';

class TextAlignSquare extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            clicked: props.globalPresets.defaultAlign + props.idPos,
            default: props.globalPresets.defaultAlign,
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
      const topLeft = {
        backgroundColor: (this.state.default === 'top-left-align') ? 'black' : 'white',
      }
      const topCenter = {
        backgroundColor: (this.state.default === 'top-center-align') ? 'black' : 'white',
      }
      const topRight = {
        backgroundColor: (this.state.default === 'top-right-align') ? 'black' : 'white',
      }
      const middleLeft = {
        backgroundColor: (this.state.default === 'middle-left-align') ? 'black' : 'white',
      }
      const middleCenter = {
        backgroundColor: (this.state.default === 'middle-center-align') ? 'black' : 'white',
      }
      const middleRight = {
        backgroundColor: (this.state.default === 'middle-right-align') ? 'black' : 'white',
      }
      const bottomLeft = {
        backgroundColor: (this.state.default === 'bottom-left-align') ? 'black' : 'white',
      }
      const bottomCenter = {
        backgroundColor: (this.state.default === 'bottom-center-align') ? 'black' : 'white',
      }
      const bottomRight = {
        backgroundColor: (this.state.default === 'bottom-right-align') ? 'black' : 'white',
      }
        return (
            <div className="Chunk-text-align" id="Chunk-text-align-parent">
                <div className="Chunk-text-align-options" id={"top-left-align" + this.props.idPos} onClick={this.topLeft} style={topLeft}></div>
                <div className="Chunk-text-align-options" id={"top-center-align" + this.props.idPos} onClick={this.topCenter} style={topCenter}></div>
                <div className="Chunk-text-align-options" id={"top-right-align" + this.props.idPos} onClick={this.topRight} style={topRight}></div>
                <div className="Chunk-text-align-options" id={"middle-left-align" + this.props.idPos} onClick={this.middleLeft} style={middleLeft}></div>
                <div className="Chunk-text-align-options" id={"middle-center-align" + this.props.idPos} onClick={this.middleCenter} style={middleCenter}></div>
                <div className="Chunk-text-align-options" id={"middle-right-align" + this.props.idPos} onClick={this.middleRight} style={topRight}></div>
                <div className="Chunk-text-align-options" id={"bottom-left-align" + this.props.idPos} onClick={this.bottomLeft} style={bottomLeft}></div>
                <div className="Chunk-text-align-options" id={"bottom-center-align" + this.props.idPos} onClick={this.bottomCenter} style={bottomCenter}></div>
                <div className="Chunk-text-align-options" id={"bottom-right-align" + this.props.idPos} onClick={this.bottomRight} style={bottomRight}></div>
            </div>
        )
    }
}

export default TextAlignSquare;
