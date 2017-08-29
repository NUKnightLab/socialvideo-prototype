var fluent_ffmpeg = require("fluent-ffmpeg");
var mergedVideo = fluent_ffmpeg(); //FFMPEG command constructor
var fs = require("fs");
var tmp = require('tmp'); //Allows creation of temporary files + directories
var tmpobj = tmp.dirSync({unsafeCleanup: true}); // Synchronous directory creation


function makeVideo(videoObjects, globalPresets, fileName) {
	var videoCount = videoObjects.length;
	var ii = 0;
	var jj = 0;


	document.getElementById('processing').innerHTML = "We're making your video! Give us a few.";

	console.log("about to loop videos: color: ", globalPresets.color)
	console.log("about to loop videos - font: ", globalPresets.font)

	videoObjects.forEach(function(videoObject){
		var outStream = fs.createWriteStream(tmpobj.name +'/' + ii + '.mov');

		fluent_ffmpeg(videoObject.video_path)
			.videoFilters({
					filter: 'drawtext',
					options: {
							// fontfile: 'Verdana.ttf', //globalPresets.font
							// fontfile: '/Library/Fonts/Microsoft/Wingdings.ttf',
							fontfile: globalPresets.font,
							text: videoObject.text,
							fontsize: 50,
							fontcolor: globalPresets.color, //textOptions.color
							// fontcolor: '#ff0000', //textOptions.color
							x: videoObject.xPos,
							y: videoObject.yPos,
							shadowcolor: 'black',
							shadowx: 2,
							shadowy: 2
					}
			})
			.videoCodec('libx264')
    		.noAudio()
    		//.audioCodec('libmp3lame')
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
				if (jj == videoCount) {
					mergedVideo.mergeToFile('0'+fileName, './tmp/')
					.videoCodec('libx264')
		    		.audioCodec('libmp3lame')
					.format('mov')
					.outputOptions('-movflags frag_keyframe+empty_moov')
					.on('error', function(err) {
					    console.log('Error ' + err.message);
					})
					.on('end', function() {
					    document.getElementById('processing').innerHTML = "Finished!";
					    addAudio(fileName);
					    tmpobj.removeCallback(); //trashes temporary directory
					});
				}
			})
			.pipe(outStream, { end: true });
		ii++;
	})
}

function addAudio(fileName) {
	fluent_ffmpeg()
		.input('0'+fileName)
		.input('./music.mp3')
		.outputOptions([
			'-codec copy',
			'-shortest'
			])
		.save('1'+fileName)
   		.on('end', function() {
   			addLogo(fileName);
   			console.log('adding logo!');
   		})
}

function addLogo(fileName) {
	fluent_ffmpeg()
		.input('1'+fileName)
		.input('logo.png')
		.complexFilter('[0:v][1:v] overlay=25:25')
		.save(fileName)
		.on('progress', function(progress) {
   		  	console.log('Processing: ' + progress.percent + '% done');
   		})
}
