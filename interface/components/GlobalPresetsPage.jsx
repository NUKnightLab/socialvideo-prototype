import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MyTitleType from './Title.jsx';
import TextChunker from './TextChunker.jsx';
import EditorToolbar from './EditorToolbar.jsx'

/**
 * A counter button: tap the button to increase the count.
 */
class GlobalPresets extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={6}>
              <MyTitleType />
              <button
                onClick={() => {
                  this.setState({ count: this.state.count + 1 });
                }}
              >
                Count: {this.state.count}
              </button>
              <EditorToolbar />
            </Col>
            <Col xs={6}>
              <TextChunker />
            </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}
export default GlobalPresets;
