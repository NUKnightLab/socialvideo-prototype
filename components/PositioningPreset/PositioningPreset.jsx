import React from 'react';
import GlobalAlignSquare from '../GlobalAlignSquare/GlobalAlignSquare.jsx';
import './PositioningPreset.css';


class DefaultTextPosition extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    }
    }

    render() {
        return (
        	<GlobalAlignSquare />
        )
    }
}

export default DefaultTextPosition;