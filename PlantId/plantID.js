'use strict';


var fs = require('fs');

// function to encode file data to base64 encoded string

function base64_encode(file) {
// read binary data
var bitmap = fs.readFileSync(file);
// convert binary data to base64 encoded string
return new Buffer(bitmap).toString('base64');
}


const image_1 = './images/img1.jpg';
//const image_2 = '/data/media/image_2.jpg';


var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.plant.id/v2/identify',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "api_key":"UNMFzRR5vGyf7upPyKuKbTiPLvMq7BJTSxpKpOBoGget5HY950",
     "images": [base64_encode(image_1)]})

};

request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
