import React from 'react';
var ColorPicker = require('rc-color-picker');
import 'rc-color-picker/assets/index.css';

class ColorPreset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#2D3545'
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  setColor() {
    var globalPresets = this.props.globalPresets;
    // some code to get color
    this.props.updateGlobal(globalPresets);
  }

  changeHandler(colors) {
    console.log(colors);
    this.setState({ color: colors.color })
  }


  render() {
    return (
      <div style={{ textAlign: 'center' }}>
      <ColorPicker
        color={this.state.color}
        onChange={this.changeHandler}
      >
        <span className="react-custom-trigger">choose color</span>
      </ColorPicker>
    </div>
    )
  }
}

export default ColorPreset