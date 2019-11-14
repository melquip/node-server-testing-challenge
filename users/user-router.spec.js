const request = require('supertest');
const server = require('../server/server');

describe('user-router', () => {
  describe('[POST] / login', () => {
    /*it('user can login with credentials', () => {
      return request(server)
        .post('/api/login')
        .send({ username: "melqui", password: "melqui" })
        .expect(200);
    });*/
    it('user cant login without credentials', () => {
      return request(server)
        .post('/api/login')
        .send({ username: "melqui" })
        .expect(401);
    });
  });
  describe('[GET] / users', () => {
    /*it('is allowed if user is logged in', () => {
      let token;
      return request(server)
        .post('/api/login')
        .send({ username: "melqui", password: "melqui" })
        .expect(200)
        .then((err, response) => {
          if (err) {
            console.log("ERROR", err.message)
          }
          token = response.body.token;
          
        })

    });
    it('is NOT allowed if user is NOT logged in', () => {
      return request(server).get('/users')
        .expect(400);
    });*/
  });
});