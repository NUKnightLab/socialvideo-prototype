var React = require('react');
var Popular = require('./Popular')

/*
a compononent is concerned about three things that can live within it:
states, lifecycle events, and UI. The way to set UI is with the render
method: whatever render returns is the UI of that component.
*/

//Component defintion
class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<Component />
			</div>
		)
	}
}

module.exports = App;
