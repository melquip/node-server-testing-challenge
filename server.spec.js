const request = require('supertest')
const server = require('./server')

describe('server', () => {
  describe('[GET] / endpoint', () => {
    it('the db env is testing', () => {
      expect(process.env.DB_ENV).toBe('testing')
    })

    it('shoult return 200 OK', async () => {
      const response = await request(server).get('/')
      expect(response.status).toBe(200)
    });

    it('with supertest syntax', () => {
      return request(server).get('/')
        .expect(200)
        .expect({ api: 'up' })
        .expect('Content-Length', "12")
        .expect('Content-Type', /json/)
    });

    it('returns the right response body', async () => {
      const response = await request(server).get('/')
      expect(response.body).toEqual({ api: 'up' });
    });
    
  })
})
