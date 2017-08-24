import React from 'react';
var ColorPicker = require('rc-color-picker');
import 'rc-color-picker/assets/index.css';

class TextColorPreset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#f00'
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(choice) {
        console.log(choice);
        console.log(this.state.color);
        var globalPresets = this.props.globalPresets;
        globalPresets.color = choice.color;
        this.props.updateGlobal(globalPresets);
        this.setState({color: choice.color})
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <ColorPicker color={this.state.color} onChange={this.changeHandler} >
                    <span className="react-custom-trigger">choose color</span>
                </ColorPicker>
            </div>
        )
    }
}

export default TextColorPreset