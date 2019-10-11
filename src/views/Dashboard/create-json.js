var sys = require("util"), fs = require("fs");

function processImageDir(path, outFilename, cb) {
    fs.readdir(path, function(err, files) {

        var imgfiles = [];

        // Check for images and push on the array if it's a match.
        files.forEach(function(name) {
            if(name.substr(-4).match(/(png|jpeg|jpg|gif)/)) {
                var dirName = "./components/Art/" + name;
                imgfiles.push({ src:dirName, width: 2, height: 2 });
            }
        });

        fs.writeFile(__dirname + '/' + outFilename, JSON.stringify({
            images: imgfiles
        }), function(err) {
            if (err) throw err;
            cb && cb("Art Files Stored in JSON.");
        });

    });
}

function getWidthAndHeight() {
    alert("'" + this.name + "' is " + this.width + " by " + this.height + " pixels in size.");
    return true;
}

processImageDir('./components/Art/', "preload-images.json", function(message) {
    console.log(message);
});