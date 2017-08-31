import React from 'react';
import '../www/index.css';
//import FileName from './FileName.jsx';
import FileType from './FileType.jsx';

class InitMenu extends React.Component {
	render() {
		return (
			<div className="init-menu-container">
				<div className="project-title">Codename Delaware</div>
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