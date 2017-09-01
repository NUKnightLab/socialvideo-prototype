import React from 'react';
import '../../www/styles.css';
import './InitMenu.css';
//import FileName from './FileName.jsx';
import FileType from '../FileType/FileType.jsx';

class InitMenu extends React.Component {
	render() {
		return (
			<div className="init-menu-container">
				<div className="file-styling">
					<FileType
						fileName={this.props.fileName}
						nameFile={this.props.nameFile}
					/>
				</div>
			</div>
		)
	}
}

export default InitMenu;