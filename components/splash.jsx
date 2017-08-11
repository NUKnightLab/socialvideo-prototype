import React from 'react';
import ReactDOM from 'react-dom';

import '../www/index.css';

export default class SplashPage extends React.Component {
	startButton() {
		alert('Soon this will actually do something!');
		ReactDOM.unmountComponentAtNode(document.getElementById('title'));
	}

	render() {
		return (<div>
				<h1>Codename Delaware</h1>
				<button onClick={this.startButton}>Let's go</button>
			</div>
		);
	}
}