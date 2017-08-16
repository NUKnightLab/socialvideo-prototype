function makeVideo() {
	var fi = document.getElementById('fileItem');
	var videoCount = fi.files.length;
	var ii = 0;
	var jj = 0;
	createSegmentObjects(videoCount);


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
