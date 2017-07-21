var fluent_ffmpeg = require("fluent-ffmpeg");
var open = require("open");

var mergedVideo = fluent_ffmpeg();
var videoNames = [];

function openFinder() {
	open("", "finder");
}

var videoNames = [];
var mediaPaths = [];

//function from https://stackoverflow.com/questions/2189615/how-to-get-file-name-when-user-select-a-file-via-input-type-file
function GetFileSizeNameAndType() {
	var fi = document.getElementById('file'); // GET THE FILE INPUT AS VARIABLE.

	var totalFileSize = 0;
	// VALIDATE OR CHECK IF ANY FILE IS SELECTED.
	if (fi.files.length > 0)
	{
		// RUN A LOOP TO CHECK EACH SELECTED FILE.
		for (var i = 0; i <= fi.files.length - 1; i++)
		{
			//ACCESS THE SIZE PROPERTY OF THE ITEM OBJECT IN FILES COLLECTION. IN THIS WAY ALSO GET OTHER PROPERTIES LIKE FILENAME AND FILETYPE
			videoNames.push(fi.files.item(i));
			mediaPaths.push(fi.files.item(i).path);
			var fsize = fi.files.item(i).size;
			totalFileSize = totalFileSize + fsize;
			document.getElementById('fp').innerHTML =
			document.getElementById('fp').innerHTML
			+ '<br /> ' + 'File: <b>' + fi.files.item(i).name
			+ '</b> Size: <b>' + Math.round((fsize / 1024)) //DEFAULT SIZE IS IN BYTES SO WE DIVIDING BY 1024 TO CONVERT IT IN KB
			+ '</b> Type: <b>' + fi.files.item(i).type + "</b>.";
		}
	}
	document.getElementById('divTotalSize').innerHTML = "Total File(s) Size is <b>" + Math.round(totalFileSize / 1024) + "</b> KB";
	console.log(videoNames);
	console.log(videoNames.length);
	console.log(mediaPaths);
}

function makeVideo() {
	//var input1 = document.getElementById('video1').value;
	//var input2 = document.getElementById('video2').value;
	//videoNames.push(input1);
	//videoNames.push(input2);
	mediaPaths.forEach(function(videoName){
	    mergedVideo = mergedVideo.addInput(videoName);
	});

	mergedVideo.mergeToFile('./mergedVideo.mp4', './tmp/')
	.on('error', function(err) {
	    console.log('Error ' + err.message);
	})
	.on('end', function() {
	    console.log('Finished!');
	});
}