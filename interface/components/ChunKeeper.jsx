var React = require('react');
import '../www/index.css';

class ChunKeeper extends React.Component {
	render() {
		return (
			<div>
				<Image
          			style={{width: 50, height: 50}}
          			source={require('../thumbnail1.png')}
        		/>
			</div>
		)
	}
}