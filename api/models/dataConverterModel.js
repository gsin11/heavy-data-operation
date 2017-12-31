'use strict'

const fs = require('fs'),
  path = require('path'),
  ReadJSONStream = require('read-json-stream').default,
  YAML = require('json2yaml'),
  filePath = path.join(__dirname, '../../data/records.json'),
  writablePath = path.join(__dirname, '../../data/records_yaml.yaml');

exports.convertFile = (callback) => {
  ReadJSONStream(filePath).done((err, data) => {
    let ws = fs.createWriteStream(writablePath);
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