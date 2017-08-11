var ffmpeg = require("fluent-ffmpeg");

ffmpeg('media/kl_welcome.mp4')
      .videoFilters({
          filter: 'drawtext',
          options: {
              fontfile:'Verdana.ttf',
              text: 'sample text',
              fontsize: 20,
              fontcolor: 'red',
              x: 50,
              y: 50,
              shadowcolor: 'black',
              shadowx: 2,
              shadowy: 2
          }
      })
      .output('outputsubtitle.mp4')
      .on('end', function(err) {
        if(!err) {
          console.log("Done");
          console.log("Successfull");
        }
      })
      .on('error', function(err, stdout, stderr) {
        console.log('error: ' + err.message);
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
      })
      .run();
