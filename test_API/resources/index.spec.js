const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = 'https://reqres.in';


chai.use(chaiHttp);

describe('Resources', () => {
    beforeEach((done) => {         
        done();                   
    });
  /*
  * Test the /POST route
  */
  describe('/POST Resource', () => {
      it('it should POST a register successful', (done) => {
        let resource = {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
          };
        chai.request(server)
            .post('/api/register')
            .send(resource)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.should.have.header('Content-Type');
                  res.header['content-type'].should.equal('application/json; charset=utf-8');                  
              done();
            });
      });

  });
});

/*
  * Test the /POST route
  */
describe('/POST Resource', () => {
    it('it should POST a register unsuccessful', (done) => {
      let resource = {
          email: 'sydney@fife'          
        };
      chai.request(server)
          .post('/api/register')
          .send(resource)
          .end((err, res) => {
                res.should.have.status(400);
                res.should.have.header('Content-Type');
                res.header['content-type'].should.equal('application/json; charset=utf-8');                
            done();
          });
    });
});