"use strict";

var bebop = require("node-bebop"),
    cv = require("opencv");

var drone = bebop.createClient();
    // mjpg = drone.getMjpegStream(),
    // buf = null,
    // w = new cv.NamedWindow("Video", 0);
var JSFtp = require("jsftp");

// create ftp client
var ftp = new JSFtp({
    host: "192.168.42.1" // drone ip
});

drone.connect(function() {
  // drone.MediaStreaming.videoEnable(1);
  drone.takePicture();
	ftp.ls("/internal_000/Bebop_2/media/", function (err, res) {
		var pic = []
		var done = 0
		var index = 0

		for(let i = 0; i < res.length; i++) {
			pic.push(res[i].name)
			done = 1
		}
	
		setInterval( function(){
			if(done == 1) {
				console.log(pic[index])
				done = 0
				ftp.get('/internal_000/Bebop_2/media/'+pic[index], pic[index], function (hadErr) {
					if (hadErr) {
						console.error(hadErr);
					} else {
						console.log('File copied successfully!');
						if(index < pic.length-1){
							done = 1
							index ++
						}
					}
				});
			}
		},1000)
	});

});

// mjpg.on("data", function(data) {
  // buf = data;
// });

// setInterval(function() {
  // if (buf == null) {
    // return;
  // }

  // try {
    // cv.readImage(buf, function(err, im) {
      // if (err) {
        // console.log(err);
      // } else {
        // if (im.width() < 1 || im.height() < 1) {
          // console.log("no width or height");
          // return;
        // }
        // w.show(im);
        // w.blockingWaitKey(0, 50);
      // }
    // });
  // } catch(e) {
    // console.log(e);
  // }
// }, 100);