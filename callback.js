const request = require('request');


function getHomepage(callback) {
  request.get('https://mirumee.com', (error, res, body) => {
    if (error) {
      callback(error);
    } else {
      callback(null, body);
    }
  });
}


getHomepage((error, body) => console.log(body.slice(0, 100)));
