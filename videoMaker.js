var fluent_ffmpeg = require("fluent-ffmpeg");
var fs = require("fs");
var open = require("open");
//library that allows creation of temporary files + directories
var tmp = require('tmp');
// synchronous directory creation
var tmpobj = tmp.dirSync({unsafeCleanup: true});
//getting directory path for testing purposes
//console.log(tmpobj.name);

var mergedVideo = fluent_ffmpeg();

function openFinder() {
	open("", "finder");
}

var videoNames = [];
var mediaPaths = [];
var textSegments;
var timingArray;
var app = {};
app.videoNames = [];
app.mediaPaths = [];

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
			app.videoNames.push(fi.files.item(i));
			app.mediaPaths.push(fi.files.item(i).path);
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
/*function move() {
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
}*/

function createSegmentObjects() {
	timingArray = [];
	textSegments = [];
	var segments = [];
	var inputTextArray = document.getElementsByClassName('chunk-sentence');
	for (var i = 0; i < inputTextArray.length; i++) {
		segments[i] = inputTextArray[i].value;
		console.log(segments[i]);
	}
	setTiming(segments);
	for (var i = 0; i < segments.length; i++) {
		var obj = {text: segments[i], positionX: 100, positionY: 200, time: timingArray[i]};
		textSegments.push(obj);
	}
}

// Assigns a time to each segment of words.
function setTiming(array) {
	var wpm = 180;
	var word_length = 5;
	var delay = 1500;
	var bonus = 1000;

	for (var i = 0; i <= array.length - 1; i++) {
		var words = (countWords(array[i]))/word_length;
		var words_time = ((words/wpm) * 60) * 1000;
		total_time = (delay + words_time + bonus)/100;
		timingArray.push(total_time);
	}
}

function countWords(sentence) {
	var sentence = sentence;
	var sentenceWords = sentence.split(" ");
	return sentenceWords.length;
}

//merges and outputs arbitrary number of input clips
function makeVideo() {
	var fi = document.getElementById('file');
	var videoCount = fi.files.length;
	var ii = 0;
	var jj = 0;
	createSegmentObjects();


	document.getElementById('processing').innerHTML = "We're making your video! Give us a few.";
	//move();


	app.mediaPaths.forEach(function(videoName){
		var outStream = fs.createWriteStream(tmpobj.name +'/' + ii + '.mov');

		fluent_ffmpeg(videoName)
			.videoFilters({
					filter: 'drawtext',
					options: {
							fontfile:'Verdana.ttf',
							text: textSegments[ii].text,
							fontsize: 50,
							fontcolor: 'white',
							x: textSegments[ii].positionX,
							y: textSegments[ii].positionY,
							shadowcolor: 'black',
							shadowx: 2,
							shadowy: 2
					}
			})
			.videoCodec('libx264')
    		.audioCodec('libmp3lame')
			.size('800x660')
			.format('mov')
			.outputOptions('-movflags frag_keyframe+empty_moov')
		  	.on('error', function(err) {
            console.log('An error occurred: ' + err.message);
		  	})
		  	.on('end', function() {
		    console.log('Processing finished !');

				console.log(ii, jj);
				mergedVideo = mergedVideo.addInput(tmpobj.name + '/' + jj + '.mov');
				jj++;
				if (jj == videoCount) { // replace 2 with the number of videos that the user inputs
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
					    tmpobj.removeCallback(); //trashes temporary directory
					});
				}
			})
			.pipe(outStream, { end: true });

		ii++;
	});

}
