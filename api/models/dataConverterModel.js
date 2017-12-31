'use strict'

const fs = require('fs'),
  ReadJSONStream = require('read-json-stream').default,
  YAML = require('json2yaml'),
  statics = require('../../constants');

exports.convertFile = (callback) => {
  ReadJSONStream(statics.inputFile).done((err, data) => {
    let ws = fs.createWriteStream(statics.outputFile);
    for(var index in data) {
      data[index]['size'] = data.length;
      ws.write(YAML.stringify(data[index]));
    }
    ws.end();
    ws.on('error', function (error) {
      callback({
        error: true,
        message: error
      });
    });
    ws.on('finish', function () {
      callback({
        error: false,
        message: 'file has been written'
      });
    });
  });
};