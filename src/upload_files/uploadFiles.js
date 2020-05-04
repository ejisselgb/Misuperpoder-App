const fs = require('fs');
var path = require('path');

function uploadFiles(jfs, description){

    const fileset = jfs.fileset("Avatar_Images");

    const records = [{
        data: {
          description: description
        },
        file: fs.createReadStream(path.join(__dirname, '../../assets/supergirl.png'))
    }];
    
    fileset.upload(records).subscribe(fileRecord => {
        console.log("---> response :", fileRecord);
    }, error => { 
        console.log(error)}
    );
}

module.exports = {
    uploadFiles: uploadFiles
}
