
const React = require('react');
const ReactDOM = require('react-dom');

import App from './app';

import VirtualConfigRenderer from './VirtualConfigRenderer.jsx';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'));

/*ReactDOM.render(
    React.createElement(SplashPage),
    document.getElementById('title')
  );
  ReactDOM.render(
    React.createElement(TextChunker),
    document.getElementById('app')
  );
  ReactDOM.render(
    React.createElement(MediaLib),
    document.getElementById('mount')
  );
  ReactDOM.render(
    <AppComponent chunks={chunkLites}/>,
    document.getElementById('ChunkTest')
  );*/
  ReactDOM.render(React.createElement(VirtualConfigRenderer),
    document.getElementById('ChunkCounter')
  );
