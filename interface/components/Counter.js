import React from 'react';
import TextChunker from './TextChunker.jsx';
import MyTitleType from './Title.jsx';
import SplashPage from './splash.jsx';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <SplashPage />
        <TextChunker />
        <MyTitleType />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}
export default Counter;
