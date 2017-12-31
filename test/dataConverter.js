let dataConverterController = require("../api/controllers/dataConverterController");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let expect = chai.expect();

chai.use(chaiHttp);

//Our parent block
describe('dataConverter', () => {
  describe('Convert File', () => {  
    
    it("it should create yaml file", done => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("it should delete yaml file", done => {
      chai.request(server)
        .get('/delete')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

  });
});
