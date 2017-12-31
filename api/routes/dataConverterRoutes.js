'use strict';
module.exports = (app) => {
  const dataConverter = require('../controllers/dataConverterController');

  // dataConverter Routes
  app.route('/')
    .get(dataConverter.convertToYAML);

  app.route('/delete')
    .get(dataConverter.deleteFile);

};