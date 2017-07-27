var fluent_ffmpeg = require("fluent-ffmpeg");
var fs = require("fs");
var open = require("open");

var mergedVideo = fluent_ffmpeg();
var videoNames = [];

function openFinder() {
	open("", "finder");
}

var ii = 0;
var jj = 0;

var videoNames = [];
var mediaPaths = [];

//function from https://stackoverflow.com/questions/2189615/how-to-get-file-name-when-user-select-a-file-via-input-type-file
//Reads the file type
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
}



/**************  Functions for dragging in video     *********************/
function setDragEnv(event) {
	document.getElementById('output').textContent = '';
	event.stopPropagation();
	event.preventDefault();
}

function maintainDragEnv(event) {
	event.stopPropagation();
	event.preventDefault();
}

function doDrop(event)
{
  var dt = event.dataTransfer;
  var files = dt.files;

  var count = files.length;
  addOutputText("File Count: " + count + "\n");

    for (var i = 0; i < files.length; i++) {
      addOutputText(" File " + i + ":\n(" + (typeof files[i]) + ") : <" + files[i] + " > " +
             files[i].name + " " + files[i].size + "\n");
    }
}

function addOutputText(text)
{
  document.getElementById("output").textContent += text;
  //dump(text);
}
/**************  Functions for dragging in video     *********************/



//moves the "progress" bar. Timing currently has nothing to do with video process timing.
function move() {
    var elem = document.getElementById("myBar");
    var width = .01;
    var id = setInterval(frame, 60);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

//merges and outputs arbitrary number of input clips
function makeVideo() {
	document.getElementById('processing').innerHTML = "We're making your video! Give us a few.";
	move();

	mediaPaths.forEach(function(videoName){
		var outStream = fs.createWriteStream('output' + ii + '.mov');

		fluent_ffmpeg(videoName)
			.videoFilters({
					filter: 'drawtext',
					options: {
						fontfile:'Verdana.ttf',
						text: 'sample text',
						fontsize: 20,
						fontcolor: 'red',
						x: 100,
						y: 200,
						shadowcolor: 'black',
						shadowx: 2,
						shadowy: 2
					}
			})
			.videoCodec('libx264')
    		.audioCodec('libmp3lame')
			.size('320x240')
			.format('mov')
			.outputOptions('-movflags frag_keyframe+empty_moov')
		  	.on('error', function(err) {
		    console.log('An error occurred: ' + err.message);
		  	})
		  	.on('end', function() {
		    console.log('Processing finished !');
				console.log(ii, jj);
				mergedVideo = mergedVideo.addInput('output' + jj + '.mov');
				jj++;
				if (jj == 2) { // replace 2 with the number of videos that the user inputs
					mergedVideo.mergeToFile('./mergedVideo.mov', './tmp/')
					.videoCodec('libx264')
		    	.audioCodec('libmp3lame')
					.format('mov')
					.outputOptions('-movflags frag_keyframe+empty_moov')
					.on('error', function(err) {
					    console.log('Error ' + err.message);
					})
					.on('end', function() {
					    document.getElementById('processing').innerHTML = "Finished!";
					});
				}
		  })
		  .pipe(outStream, { end: true });

		ii++;
	});

}
