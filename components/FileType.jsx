var React = require('react');
import '../www/index.css';

class FileType extends React.Component {
    constructor(props) {
        super(props);
        this.updateFileName = this.updateFileName.bind(this);
    }

    updateFileName() {
        var fileName = this.props.fileName;
        var inputtedTitle = document.getElementById('title-input-area').value;
        var fileTypeSelector = document.getElementById('file-type-selector')
        var selectedType = fileTypeSelector.options[fileTypeSelector.selectedIndex].value;
        var finalFileName = inputtedTitle + '.' + selectedType;
        this.props.nameFile(finalFileName);
        console.log(finalFileName);
    }

    render() {
        return (
            <div className="file-type-bar">
                <input
                    id="title-input-area"
                    type="text"
                    placeholder="My Title"
                    onChange={this.updateFileName}
                />
                <select id="file-type-selector" onChange={this.updateFileName}>
                    <option value="mov">.mov</option>
                    <option value="mp4">.mp4</option>
                    <option value="mpeg">.mpeg</option>
                </select>
            </div>
    );
  }
}

export default FileType;
