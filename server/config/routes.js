var Controller = require('./../controllers/controller.js');
var path = require('path');

module.exports = function(app) {

  app.all('*', function(req, res, next){
    res.sendFile(path.resolve('./public/dist/index.html'));
  });

}
