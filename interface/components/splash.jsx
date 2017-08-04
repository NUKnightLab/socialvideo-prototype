import React from 'react';
import '../www/index.css';

class SplashPage extends React.Component {
	startButton() {
		alert('Soon this will actually do something!');
	}

	render() {
		return (
			<div>
				<h1>Codename Delaware</h1>
				<button onClick={this.startButton}>Let's go</button>
			</div>
		);
	}
}

export default SplashPage;