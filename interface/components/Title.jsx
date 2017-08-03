var React = require('react');
import './Title.css';

class MyTitleType extends React.Component {
  render() {
    return (
      <div>
        <input
          id="searchBar"
          type="text"
          placeholder="My Title"
        />
        <select id="select">
          <option value="1">mp4</option>
          <option value="2" selected="selected">mov</option>
          <option value="3">mpeg</option>
        </select>
      </div>
    );
  }
}

export default MyTitleType;
