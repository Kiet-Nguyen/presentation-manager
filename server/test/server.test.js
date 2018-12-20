const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');
const { presentations, populatePresentation } = require('./seed/seed');

beforeEach(populatePresentation);

describe('GET /presentations', () => {
  it('should get all presentations', async () => {
    const response = await request(app).get('/presentations');
    expect(200);
    expect(response.body.length).toBe(2);
  });
});
