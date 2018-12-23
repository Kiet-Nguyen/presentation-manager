const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');
const { presentations, populatePresentation } = require('./seed/seed');
const { Presentation } = require('../models/presentation');

beforeEach(populatePresentation);

describe('GET /presentations', () => {
  it('should get all presentations', async () => {
    const response = await request(app).get('/presentations');
    expect(200);
    expect(response.body.length).toBe(2);
  });
});

describe('POST /presentations/add', () => {
  it('should add new presentation', async () => {
    const presenter = 'Susan';
    const evaluator = 'Kiet';
    const topic = 'React';
    const article = 'https://mongoosejs.com';
    const date = '2018-12-20';
    const keywords = 'mongoose';
    const summary = 'Mongoose';

    const response = await request(app)
      .post('/presentations/add')
      .send({
        presenter,
        evaluator,
        topic,
        article,
        date,
        keywords,
        summary
      });
    expect(200);
    expect(response.body.presenter).toBe(presenter);

    const result = await Presentation.find({presenter});
    expect(result.length).toBe(1);
  });
});
