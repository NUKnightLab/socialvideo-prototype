 import React from 'react';
 import '../www/index.css';

 /**
 * A counter button: tap the button to increase the count.
 */
export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (<div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count: {this.state.count}
        </button>
      </div>);
  }
}