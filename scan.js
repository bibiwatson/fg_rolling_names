const tesseract = require('node-tesseract');
const robot     = require('robotjs');
const jimp      = require('jimp');
const fs        = require('fs');

const scan = async(params) => {
    let imagePath = params.imagePath ? params.imagePath : null;

    return new Promise(async(resolve, reject) => {
        try {
            let screenshot = null;

            if('x' in imagePath && 'y' in imagePath && 'width' in imagePath && 'height' in imagePath) {
                screenshot = robot.screen.capture(imagePath.x, imagePath.y, imagePath.width, imagePath.height);
            }

            if('x1' in imagePath && 'y1' in imagePath && 'x2' in imagePath && 'y2' in imagePath) {
                screenshot = robot.screen.capture(imagePath.x1, imagePath.y1, imagePath.x2 - imagePath.x1, imagePath.y2 - imagePath.y1);
            }
            
            new jimp(screenshot.width, screenshot.height, async function (err, img) {
                img.bitmap.data = screenshot.image;
                img.brightness(0);
                img.greyscale();
                img.scale(2);
                img.write('./screen.tmp.jpg');

                const text = await getText('./screen.tmp.jpg');
                resolve(text);
            });	
        } catch(e) {
            reject(e);
        }				
    });
}

const getText = img => {
    return new Promise((resolve,reject)=>{
        tesseract.process(img, (err, text) => {
            if(err){
                reject(err);
            }
        
            text = text.replace('\n', ' ');
            console.log("Recognized text:", text);
            fs.appendFile('./names.txt', text, err => {
                if(err) console.error(err);
            });
            resolve(text);
        });
    })
}


module.exports = {
    scan
}