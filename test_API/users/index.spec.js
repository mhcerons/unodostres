const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = 'https://reqres.in';


chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {
        done();
    });
    describe('/GET Users', () => {
        it('it should GET all Users in the page number 2', (done) => {
            chai.request(server)
                .get('/api/users?page=2')
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
    describe('/POST User', () => {
        it('it should POST a user', (done) => {
            let user = {
                name: 'morpheus',
                job: 'leader'
            };
            chai.request(server)
                .post('/api/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.have.header('Content-Type');
                    res.header['content-type'].should.equal('application/json; charset=utf-8');
                    done();
                });
        });

    });

    /*
    * Test the /PUT route
    */
    describe('/PUT User', () => {
        it('it should PUT the user with ID 2', (done) => {
            let user = {
                name: 'morpheus',
                job: 'zion resident'
            };
            chai.request(server)
                .put('/api/users/2')
                .send(user)
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
 * Test the /PATCH route
 */
describe('/PATCH User', () => {
    it('it should PATCH the user with ID 2', (done) => {
        let user = {
            name: 'morpheus',
            job: 'zion resident'
        };
        chai.request(server)
            .patch('/api/users/2')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('Content-Type');
                res.header['content-type'].should.equal('application/json; charset=utf-8');
                done();
            });
    });

});

/*
  * Test the /DELETE route
  */
describe('/DELETE User', () => {
    it('it should DELETE the user with ID 2', (done) => {
        chai.request(server)
            .delete('/api/users/2')
            .end((err, res) => {
                res.should.have.status(204);                
                done();
            });
    });

});
