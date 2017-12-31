'use strict';

const Modal = require('../models/dataConverterModel');
let statics = require('../../constants');
exports.convertToYAML = (req, res) => {
  Modal.convertFile((response) => {
    if(response.error === true) {
      res.status(400).send(response);
    } else {
      res.status(200).send(response);
    }
  });
};

exports.deleteFile = (req, res) => {
  let fs = require('fs');

  fs.unlink(statics.outputFile, function(err) {
    if(err && err.code == 'ENOENT') {
      // file doens't exist
      res.status(400).send('File not found, so not deleting.');
    } else if (err) {
      // other errors, e.g. maybe we don't have enough permission
      res.status(400).send('Error occurred while trying to remove file');
    } else {
      res.status(200).send('removed');
    }
  });
};