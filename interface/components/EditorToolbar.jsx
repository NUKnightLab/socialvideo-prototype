import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './EditorToolbar.css';

class EditorToolbar extends React.Component {
  render() {
    return (
      <div id="toolbar">
        <Grid>
          <Row>
            <Col xs={6}>
              <Row>
                <Col xs={3}>
                  <div id="color-choice">
                    <select className="selector">
                      <option value="1">Color</option>
                      <option value="2">White</option>
                    </select>
                  </div>
                </Col>
                <Col xs={3}>
                  <div id="highlight-choice">
                    <select className="selector">
                      <option value="1">Highlight</option>
                      <option value="2">White</option>
                    </select>
                  </div>
                </Col>
                <Col xs={3}>
                  <div id="font-choice">
                    <select className="selector">
                      <option value="2">Verdana</option>
                    </select>
                  </div>
                </Col>
                <Col xs={3}>
                  <div id="upload-choice">
                    Upload
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default EditorToolbar;
