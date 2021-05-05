const ks        = require('node-key-sender');
const sleep     = require('system-sleep');
const {scan}    = require('./scan');

let num     = 0;
let found   = true;

sleep(3000);

const someFun = async() => {
    while (found){
        console.log(found);
        
        if(!found){
            return;
        }
        
        console.log('sleep');
        console.log('P');
        ks.sendKey('P');
        console.log('sleep');
        sleep(3000);
        let text = await scan({
            imagePath: {
                x1: 1170,
                y1: 320, 
                x2: 1470, 
                y2: 370
            }
        });
        
        console.log("[result]", text);
        
        sleep(1000);
        if(text.indexOf('Fall Gal') >= 0 || text.indexOf('Fall Guy') >= 0){
            found = false;
        }

        console.log(found);
    }
}

sleep(5000);
someFun();