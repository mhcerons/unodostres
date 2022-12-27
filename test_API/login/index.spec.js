const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = 'https://reqres.in';


chai.use(chaiHttp);

describe('Login', () => {
    beforeEach((done) => {
        done();
    });
});

/*
  * Test the /POST route
  */
describe('/POST Login', () => {
    it('it should POST a login successful', (done) => {
        let userLogin = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        };
        chai.request(server)
            .post('/api/login')
            .send(userLogin)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('Content-Type');
                res.header['content-type'].should.equal('application/json; charset=utf-8');
                done();
            });
    });
});

/*
  * Test the /POST route
  */
describe('/POST Login', () => {
    it('it should POST a login unsuccessful', (done) => {
        let userLogin = {
            email: 'peter@klaven'
        };
        chai.request(server)
            .post('/api/login')
            .send(userLogin)
            .end((err, res) => {
                res.should.have.status(400);
                res.should.have.header('Content-Type');
                res.header['content-type'].should.equal('application/json; charset=utf-8');
                done();
            });
    });
});