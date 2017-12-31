'use strict';

const Modal = require('../models/dataConverterModel');

exports.convertToYAML = (req, res) => {
  Modal.convertFile((response) => {
    if(response.error === true) {
      res.status(400).send(response);
    } else {
      res.status(200).send(response);
    }
  });
};