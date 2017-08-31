import React from 'react';
import GlobalAlignSquare from './GlobalAlignSquare.jsx';

class GlobalLogo extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	logo_path: ''
	    }
    }

    showUploadedLogo() {
    }

    render() {
        return (
        	<div className="global-logo-presets">
        		<input type="file" className="upload-logo" />
        	</div>
        )
    }
}

export default GlobalLogo;