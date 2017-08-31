var fluent_ffmpeg = require("fluent-ffmpeg");
var mergedVideo = fluent_ffmpeg(); //FFMPEG command constructor
var fs = require("fs");
var tmp = require('tmp'); //Allows creation of temporary files + directories
var tmpobj = tmp.dirSync({unsafeCleanup: true}); // Synchronous directory creation


function makeVideo(videoObjects, globalPresets, fileName, presetOptions) {
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
					var videoName = (presetOptions.logo !== '' || presetOptions.music !== '') ? tmpobj.name +'/0'+fileName : fileName;
					mergedVideo.mergeToFile(videoName, './tmp/')
					.videoCodec('libx264')
		    		.audioCodec('libmp3lame')
					.format('mov')
					.outputOptions('-movflags frag_keyframe+empty_moov')
					.on('error', function(err) {
					    console.log('Error ' + err.message);
					})
					.on('end', function() {
					    document.getElementById('processing').innerHTML = "Finished merging!";
					   	if (presetOptions.music !== '') {
								addAudio(fileName, presetOptions);
								console.log('Adding Music!');
							}
							else if (presetOptions.logo !== '') {
								console.log('Adding Logo!');
								addLogo(fileName, presetOptions);
							}
					});
				}
			})
			.pipe(outStream, { end: true });
		ii++;
	})
}

function addAudio(fileName, presetOptions) {
	var videoName = (presetOptions.logo !== '') ? tmpobj.name +'/1'+fileName : fileName;
	fluent_ffmpeg()
		.input(tmpobj.name +'/0'+fileName)
		.input(presetOptions.music)
		.outputOptions([
			'-codec copy',
			'-shortest'
			])
		.save(videoName)
   		.on('end', function() {
				if (presetOptions.logo !== '') {
					addLogo(fileName, presetOptions);
					console.log('adding logo!');
				}
				else {
					console.log('Finished!')
				}
   		})
}

function addLogo(fileName, presetOptions) {
	var input = (presetOptions.music !== '') ? tmpobj.name + '/1'+fileName : tmpobj.name +'/0'+fileName;
	fluent_ffmpeg()
		.input(input)
		.input(presetOptions.logo)
		.complexFilter('[0:v][1:v] overlay=25:25')
		.save(fileName)
		.on('end', function() {
			console.log('Finished!');
			tmpobj.removeCallback(); //trashes temporary directory
		})
		.on('progress', function(progress) {
   		  	console.log('Processing: ' + progress.percent + '% done');
   		})
}
