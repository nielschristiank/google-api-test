var Controller = require('./../controllers/controller.js');
var path = require('path');
var cors = require('cors');

// var permitCrossDomainRequests = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   // some browsers send a pre-flight OPTIONS request to check if CORS is enabled so you have to also respond to that
//   if ('OPTIONS' === req.method) {
//     res.send(200);
//   }
//   else {
//     next();
//   }
// };

module.exports = function(app) {

  //app.use(permitCrossDomainRequests);

  app.all('*', cors(), function(req, res, next){
    res.sendFile(path.resolve('./public/dist/index.html'));
  });

}
