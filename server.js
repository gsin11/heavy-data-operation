const expressApp = require('express')(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json());

// importing route
let routes = require('./api/routes/dataConverterRoutes');

// register the route
routes(expressApp);

expressApp.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

expressApp.listen(port);

console.log('RESTful API server started on: ' + port);

module.exports = expressApp;
