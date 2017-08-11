import React from 'react';
import '../www/index.css';

export default class MediaLib extends React.Component {
	here(e) {
  		var file = event.target.files[0];
  		var reader = new FileReader();
  		reader.onload = function(event) {
    		// The file's text will be printed here
    		console.log(event.target.result)
 		};
 		reader.readAsText(file);
 	}


	/*listUploads() {
		var files = this.refs.fileUpload.getInputDOMNode().files;
		for (let i = 0; i < files.length; ++i)
		{
			let asset = files.item(i);
			uploadedAssets.push(asset);
			uploadedPaths.push(asset.path);
			uploadSize += asset.size;
			let printedAsset = document.createElement('P');
			printedAsset.setAttribute("class", "asset-info");
			printedAsset.innerHTML = 
				'File: <b>' + asset.name
				+ '</b> Size: <b>' + Math.round(asset.size / 1024)
				+ '</b> Type: <b>' + asset.type + '</b>.';
			document.getElementById('assetList').appendChild(printedAsset);
		}
		alert('Soon this will actually do something!');
	}*/

	render() {
		return (<div>
				<input type='file' ref='fileUpload' multiple onChange={e => this.here(e)} />
			    <div id="assetList"></div>
			</div>
		);
	}
}