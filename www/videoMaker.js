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
			.aspect('4:3')
			.autopad()
			.format('mov')
			.duration(videoObject.text_timing)
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
					mergedVideo.mergeToFile(tmpobj.name +'/0'+fileName, './tmp/')
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
					});
				}
			})
			.pipe(outStream, { end: true });
		ii++;
	})
}

function addAudio(fileName) {
	fluent_ffmpeg()
		.input(tmpobj.name +'/0'+fileName)
		.input('./music.mp3')
		.outputOptions([
			'-codec copy',
			'-shortest'
			])
		.save(tmpobj.name + '/1'+fileName)
   		.on('end', function() {
   			addLogo(fileName);
   			console.log('adding logo!');
   		})
}

function addLogo(fileName) {
	fluent_ffmpeg()
		.input(tmpobj.name + '/1'+fileName)
		.input('logo.png')
		.complexFilter('[1:v]scale=100:-1[fg];[0:v][fg] overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2')
		//.complextFilter('-vf scale=100:-1')
		.save(fileName)
		.on('end', function() {
			tmpobj.removeCallback(); //trashes temporary directory
		})
		.on('progress', function(progress) {
   		  	console.log('Processing: ' + progress.percent + '% done');
   		})
}
